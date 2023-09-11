import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BedDocument = HydratedDocument<Bed>;

@Schema()
export class Bed {
    @Prop()
    name: string;

    @Prop()
    value: number;
}

export const BedSchema = SchemaFactory.createForClass(Bed);