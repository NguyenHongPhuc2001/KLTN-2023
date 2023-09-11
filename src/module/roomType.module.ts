import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RoomTypeController } from "src/controller/roomType.controller";
import { RoomType, RoomTypeSchema } from "src/schema/roomType.schema";
import { RoomTypeService } from "src/service/roomType.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: RoomType.name, schema: RoomTypeSchema }])],
    controllers: [RoomTypeController],
    providers: [RoomTypeService]
})
export class RoomTypeModule { }