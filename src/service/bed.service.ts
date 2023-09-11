import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BedDto } from "src/dto/bed.dto";
import { Bed } from "src/schema/bed.schema";

@Injectable()
export class BedService {
    constructor(@InjectModel(Bed.name) private bedModel: Model<Bed>) { }

    async findAll(): Promise<Bed[]> {
        return this.bedModel.find().exec();
    }

    async findById(bedId: string): Promise<Bed> {
        return this.bedModel.findOne({
            _id: bedId
        }).exec();
    }

    async create(bedDto: BedDto): Promise<Bed> {
        return this.bedModel.create(bedDto);
    }

    async update(bedId: string, bedDto: BedDto): Promise<Bed> {
        return this.bedModel.findOneAndUpdate({
            _id: bedId
        }, bedDto).exec();
    }

    async deleteById(bedId: string) {
        return this.bedModel.findOneAndDelete({
            _id: bedId
        }).exec();
    }
}