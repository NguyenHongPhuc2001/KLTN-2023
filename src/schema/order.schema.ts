import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {

    @Prop()
    roomTypeId: string;

    @Prop()
    userId: string;

    @Prop()
    orderDate: Date;

    @Prop()
    totalPrice: number;

    @Prop()
    dateCount: number;

    @Prop()
    status: string;

    @Prop()
    isEnd: boolean;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop()
    updated_by: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);