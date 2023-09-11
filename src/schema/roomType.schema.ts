import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RoomTypeDocument = HydratedDocument<RoomType>;

@Schema()
export class RoomType {

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    status_id: string;

    @Prop()
    value: number;

    @Prop()
    bed: string[];

    @Prop()
    created_at: Date;

    @Prop()
    created_by: string;

    @Prop()
    updated_at: Date;

    @Prop()
    updated_by: string;

}

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);