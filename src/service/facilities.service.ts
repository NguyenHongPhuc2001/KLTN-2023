import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FacilitesDto } from "src/dto/facilities.dto";
import { Facilities } from "src/schema/facilities.schema";

@Injectable()
export class FacilitiesService {
    constructor(@InjectModel(Facilities.name) private facilitiesModel: Model<Facilities>) { }

    async findAll(): Promise<Facilities[]> {
        return this.facilitiesModel.find();
    }

    async findById(facilitiesId: string): Promise<Facilities> {
        return this.facilitiesModel.findOne({
            _id: facilitiesId
        }).exec();
    }

    async create(facilitiesDto: FacilitesDto): Promise<Facilities> {
        return this.facilitiesModel.create(facilitiesDto);
    }

    async update(facilitiesId: string, facilitiesDto: FacilitesDto): Promise<Facilities> {
        return this.facilitiesModel.findOneAndUpdate({
            _id: facilitiesId
        }, facilitiesDto).exec();
    }

    async deleteById(facilitiesId: string) {
        return this.facilitiesModel.findOneAndDelete({
            _id: facilitiesId
        }).exec();
    }
}