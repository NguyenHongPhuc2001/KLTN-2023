import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { User } from "src/schema/user.schema";
import { UserService } from "src/service/user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAllUser(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':userId')
    async getUserById(@Param('userId') userId: string): Promise<User> {
        return this.userService.findById(userId);
    }

    @Post('byAccount')
    async getUserByUserAccount(@Body() userDto: UserDto): Promise<User> {
        return this.userService.findByUserNameAndPassword(userDto.user_name, userDto.password);
    }

    @Post('register')
    async registerUser(@Body() userDto: UserDto): Promise<User> {
        let createDate: Date = new Date();
        userDto.created_at = createDate;
        userDto.updated_at = createDate;
        return this.userService.register(userDto);
    }

    @Post('login')
    async logIn(@Body() userDto: UserDto): Promise<boolean> {
        return this.userService.logIn(userDto.user_name, userDto.password);
    }

    @Put(':userId')
    async update(@Param('userId') userId: string, @Body() userDto: UserDto): Promise<User> {
        return this.userService.update(userId, userDto);
    }

    @Put('resetPassword/:userId')
    async resetPassword(@Param('userId') userId: string, @Body() userDto: UserDto): Promise<boolean> {
        return this.userService.resetPassword(userId, userDto.old_password, userDto.new_password, userDto.re_password);
    }

    @Delete(':userId')
    async deleteUserById(@Param('userId') userId: string) {
        return this.userService.deleteById(userId);
    }
}