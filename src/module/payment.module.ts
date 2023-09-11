import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PaymentController } from "src/controller/payment.controller";
import { Payment, PaymentSchema } from "src/schema/payment.schema";
import { PaymentService } from "src/service/payment.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }])],
    controllers: [PaymentController],
    providers: [PaymentService]
})
export class PaymentModule { }