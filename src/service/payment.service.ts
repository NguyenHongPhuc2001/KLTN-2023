import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PaymentDto } from "src/dto/payment.dto";
import { Payment } from "src/schema/payment.schema";

@Injectable()
export class PaymentService {
    constructor(@InjectModel(Payment.name) private paymentModel: Model<Payment>) { }

    async findAll(): Promise<Payment[]> {
        return this.paymentModel.find().exec();
    }

    async findById(paymentId: string): Promise<Payment> {
        return this.paymentModel.findOne({
            _id: paymentId
        }).exec();
    }

    async create(paymentDto: PaymentDto): Promise<Payment> {
        return this.paymentModel.create(paymentDto);
    }

    async update(paymentId: string, paymentDto: PaymentDto): Promise<Payment> {
        return this.paymentModel.findOneAndUpdate({
            _id: paymentId
        }, paymentDto).exec();
    }

    async deleteById(paymentId: string) {
        return this.paymentModel.findOneAndDelete({
            _id: paymentId
        }).exec();
    }
}