import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DiscountDocument = HydratedDocument<Discount>;

@Schema()
export class Discount {

    @Prop()
    name: string;

    @Prop()
    content: string;

    @Prop()
    code: string;

    @Prop()
    value: number;

    @Prop()
    type: string;

    @Prop()
    start: Date;

    @Prop()
    status: string;

    @Prop()
    end: Date;

    @Prop()
    created_at: Date;

    @Prop()
    created_by: string;

    @Prop()
    updated_at: Date;

    @Prop()
    updated_by: string;

}

export const DiscountSchema = SchemaFactory.createForClass(Discount);