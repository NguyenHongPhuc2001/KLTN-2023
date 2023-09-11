import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BedController } from "src/controller/bed.controller";
import { Bed, BedSchema } from "src/schema/bed.schema";
import { BedService } from "src/service/bed.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Bed.name, schema: BedSchema }])],
    controllers: [BedController],
    providers: [BedService]

})
export class BedModule { }