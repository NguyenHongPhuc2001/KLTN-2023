import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DiscountDto } from "src/dto/discount.dto";
import { Discount } from "src/schema/discount.schema";

@Injectable()
export class DiscountService {
    constructor(@InjectModel(Discount.name) private discountModel: Model<Discount>) { }

    async findAll(): Promise<Discount[]> {
        return this.discountModel.find().exec();
    }

    async findById(discountId: string): Promise<Discount> {
        return this.discountModel.findOne({
            _id: discountId
        }).exec();
    }

    async create(discountDto: DiscountDto): Promise<Discount> {
        return this.discountModel.create(discountDto);
    }

    async update(discountId: string, discountDto: DiscountDto): Promise<Discount> {
        return this.discountModel.findOneAndUpdate({
            _id: discountId
        }, discountDto).exec();
    }

    async deleteById(discountId: string) {
        return this.discountModel.findOneAndDelete({
            _id: discountId
        }).exec();
    }
}