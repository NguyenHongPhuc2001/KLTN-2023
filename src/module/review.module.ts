import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewController } from "src/controller/review.controller";
import { Review, ReviewSchema } from "src/schema/review.schema";
import { ReviewService } from "src/service/review.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])],
    controllers: [ReviewController],
    providers: [ReviewService]
})
export class ReviewModule { }