import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OrderDto } from "src/dto/order.dto";
import { Order } from "src/schema/order.schema";

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) { }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }

    async findById(orderId: string): Promise<Order> {
        return this.orderModel.findOne({
            _id: orderId
        }).exec();
    }

    async create(orderDto: OrderDto): Promise<Order> {
        return this.orderModel.create(orderDto);
    }

    async update(orderId: string, orderDto: OrderDto): Promise<Order> {
        return this.orderModel.findOneAndUpdate({
            _id: orderId
        }, orderDto).exec();
    }

    async deleteById(orderId: string) {
        return this.orderModel.findOneAndDelete({
            _id: orderId
        }).exec();
    }
}