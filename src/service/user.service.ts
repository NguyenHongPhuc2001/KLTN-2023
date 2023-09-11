import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/dto/user.dto";
import { User } from "src/schema/user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(userId: string): Promise<User> {
        return this.userModel.findOne({
            _id: userId
        }).exec();
    }

    async findByUserNameAndPassword(userName: string, password: string): Promise<User> {
        return this.userModel.findOne({
            user_name: userName,
            password: password
        }).exec();
    }

    async findByUserName(userName: string): Promise<User> {
        return this.userModel.findOne({
            user_name: userName
        }).exec();
    }

    async isCorrectPassword(password: string, re_password: string): Promise<boolean> {
        return re_password === password;
    }

    async logIn(userName: string, password: string): Promise<boolean> {
        let user: User = await this.findByUserNameAndPassword(userName, password);
        let result: boolean = false;
        if (user != null) {
            result = true;
        }
        return result;
    }

    async isUserNameExist(userName: string): Promise<boolean> {
        let user: User = await this.findByUserName(userName);
        console.log('user is ' + user);
        if (user != undefined || user != null) {
            return true;
        }
        return false;
    }

    async register(userDto: UserDto): Promise<User> {
        let check: boolean = await this.isUserNameExist(userDto.user_name);
        if (check == true) {
            return;
        }
        return this.userModel.create(userDto);
    }

    async update(userId: string, userDto: UserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate({ 
            _id: userId 
        }, userDto).exec();
    }

    async resetPassword(userId: string, old_password: string, new_password: string, re_password: string): Promise<boolean> {
        let user: User = await this.findById(userId);
        if (user.password != old_password) {
            return false;
        } else {
            if (this.isCorrectPassword(new_password, re_password)) {
                return true;
            }
        }
    }

    async deleteById(userId: string) {
        return this.userModel.findByIdAndDelete({
            _id: userId
        });
    }
}