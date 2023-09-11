import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FacilitiesController } from "src/controller/facilities.controller";
import { Facilities, FacilitiesSchema } from "src/schema/facilities.schema";
import { FacilitiesService } from "src/service/facilities.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Facilities.name, schema: FacilitiesSchema }])],
    controllers: [FacilitiesController],
    providers: [FacilitiesService]
})
export class FacilitiesModule { }