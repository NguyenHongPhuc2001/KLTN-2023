import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsPhoneNumber, IsStrongPassword } from "class-validator";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop()
    user_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    is_admin: boolean;

    @Prop()
    phone: string;

    @Prop()
    image: string[];

    @Prop({isRequired:false})
    status: string;

    @Prop({isRequired:false})
    access_token: string;

    @Prop({isRequired:false})
    refresh_token: string;

    @Prop({isRequired:false})
    reset_password_token: string;

    @Prop({isRequired:false})
    reset_password_expire: Date;

    @Prop()
    updated_at: Date;

    @Prop()
    created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);