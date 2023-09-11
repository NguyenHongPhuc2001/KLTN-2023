import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {

    @Prop()
    transactionInfo: string;

    @Prop()
    paymentInfo: string;

    @Prop()
    created_by: string;

    @Prop()
    created_at: Date;

}

export const PaymentSchema = SchemaFactory.createForClass(Payment);