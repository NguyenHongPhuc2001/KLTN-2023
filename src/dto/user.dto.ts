export class UserDto{
    user_name:string;
    email:string;
    password:string;
    old_password:string;
    new_password:string;
    re_password:string;
    is_admin:boolean;
    phone:string;
    image:string[];
    status:string;
    access_token:string;
    refresh_token:string;
    reset_password_token: string;
    reset_password_expire: Date;
    updated_at: Date;
    created_at: Date;
}