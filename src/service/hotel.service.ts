import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HotelDto } from "src/dto/hotel.dto";
import { Hotel } from "src/schema/hotel.schema";

@Injectable()
export class HotelService {
    constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) { }

    async findAll(): Promise<Hotel[]> {
        return this.hotelModel.find().exec();
    }

    async findById(hotelId: string): Promise<Hotel> {
        return this.hotelModel.findOne({
            _id: hotelId
        }).exec();
    }

    async create(hotelDto: HotelDto): Promise<Hotel> {
        return this.hotelModel.create(hotelDto);
    }

    async update(hotelId: string, hotelDto: HotelDto): Promise<Hotel> {
        return this.hotelModel.findOneAndUpdate({
            _id: hotelId
        }, hotelDto).exec();
    }

    async deleteById(hotelId: string) {
        return this.hotelModel.findOneAndDelete({
            _id: hotelId
        }).exec();
    }
}