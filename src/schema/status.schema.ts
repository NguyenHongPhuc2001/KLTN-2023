import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from "mongoose";


export type StatusDocument = HydratedDocument<Status>

@Schema()
export class Status {
    
    @Prop()
    name: string;

    @Prop()
    type: String;

    @Prop({type: SchemaTypes.ObjectId})
    created_by: string;

    @Prop()
    created_at: Date;

    @Prop({type: SchemaTypes.ObjectId})
    updated_by: string;

    @Prop()
    updated_at: Date;
}

export const StatusSchema = SchemaFactory.createForClass(Status); 