import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {

    @Prop()
    rating: number;

    @Prop()
    content: string;

    @Prop()
    status: string;

    @Prop()
    is_warning: boolean;

    @Prop()
    room_type_id: string;

    @Prop()
    hotel_id: string;

    @Prop()
    user_id: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop()
    updated_by: string;

}

export const ReviewSchema = SchemaFactory.createForClass(Review);