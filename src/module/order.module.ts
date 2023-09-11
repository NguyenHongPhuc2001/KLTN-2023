import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderController } from "src/controller/order.controller";
import { Order, OrderSchema } from "src/schema/order.schema";
import { OrderService } from "src/service/order.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule { }