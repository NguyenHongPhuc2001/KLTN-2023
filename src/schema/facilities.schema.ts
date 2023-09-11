import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FacilitiesDocument = HydratedDocument<Facilities>;

@Schema()
export class Facilities{

    @Prop()
    name:string;

    @Prop()
    image:string[];

    @Prop()
    status:string;

    @Prop()
    created_at:Date;

    @Prop()
    created_by:string;

    @Prop()
    updated_at:Date;

    @Prop()
    updated_by:string;
}

export const FacilitiesSchema = SchemaFactory.createForClass(Facilities);