import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HotelController } from "src/controller/hotel.controller";
import { Hotel, HotelSchema } from "src/schema/hotel.schema";
import { HotelService } from "src/service/hotel.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }])],
    controllers: [HotelController],
    providers: [HotelService]
})
export class HotelModule { }