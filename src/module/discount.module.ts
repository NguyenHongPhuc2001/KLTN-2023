import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DiscountController } from "src/controller/discount.controller";
import { Discount, DiscountSchema } from "src/schema/discount.schema";
import { DiscountService } from "src/service/discount.service";

@Module({
    imports: [MongooseModule.forFeature(
        [{ name: Discount.name, schema: DiscountSchema }]
    )],
    controllers: [DiscountController],
    providers: [DiscountService]
})
export class DiscountModule { }