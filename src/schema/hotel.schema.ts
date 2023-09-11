import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel{

    @Prop()
    name:string;

    @Prop()
    description:string;

    @Prop()
    images:string[];

    @Prop()
    rating:number;

    @Prop()
    status:string;

    @Prop()
    address:string;

    @Prop()
    created_at:Date;
    
    @Prop()
    created_by:string;

    @Prop()
    updated_at: Date;

    @Prop()
    updated_by:string;

}

export const HotelSchema = SchemaFactory.createForClass(Hotel);