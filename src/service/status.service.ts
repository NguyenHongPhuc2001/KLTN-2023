import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { StatusDto } from "src/dto/status.dto";
import { Status } from "src/schema/status.schema";

@Injectable()
export class StatusService {
    constructor(
        @InjectModel(Status.name) private statusModel: Model<Status>
    ) { }

    async getStatusById(statusId: string): Promise<Status> {
        return this.statusModel.findOne({
            _id: statusId
        }).exec();
    }

    async getByName(name: string): Promise<Status> {
        return this.statusModel.findOne({
            name: name
        }).exec();
    }

    async getAll(): Promise<Status[]> {
        return this.statusModel.find().exec();
    }

    async create(statusDto:StatusDto): Promise<Status> {
        return this.statusModel.create(statusDto);
    }

    async deleteById(statusId: string) {
        return this.statusModel.findByIdAndDelete({
            _id: statusId
        }).exec();
    }

    async update(statusId: string, statusDto: StatusDto): Promise<Status> {
        return this.statusModel.findByIdAndUpdate({
            _id: statusId
        }, statusDto).exec();
    }
}