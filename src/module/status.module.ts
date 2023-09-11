import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StatusController } from "src/controller/status.controller";
import { Status, StatusSchema } from "src/schema/status.schema";
import { StatusService } from "src/service/status.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }])],
    controllers: [StatusController],
    providers: [StatusService]
})
export class StatusModule { }
