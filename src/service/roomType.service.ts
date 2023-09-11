import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RoomTypeDto } from "src/dto/roomType.dto";
import { RoomType } from "src/schema/roomType.schema";

@Injectable()
export class RoomTypeService {
    constructor(@InjectModel(RoomType.name) private roomTypeModel: Model<RoomType>) { }

    async findAll(): Promise<RoomType[]> {
        return this.roomTypeModel.find().exec();
    }

    async findById(roomTypeId: string): Promise<RoomType> {
        return this.roomTypeModel.findOne({
            _id: roomTypeId
        }).exec();
    }

    async create(roomTypeDto: RoomTypeDto): Promise<RoomType> {
        return this.roomTypeModel.create(roomTypeDto);
    }

    async update(roomTypeId: string, roomTypeDto: RoomTypeDto): Promise<RoomType> {
        return this.roomTypeModel.findOneAndUpdate({
            _id: roomTypeId
        }, roomTypeDto).exec();
    }

    async deleteById(roomTypeId: string) {
        return this.roomTypeModel.findOneAndDelete({
            _id: roomTypeId
        }).exec();
    }
}