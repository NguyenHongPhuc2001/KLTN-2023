import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReviewDto } from "src/dto/review.dto";
import { Review } from "src/schema/review.schema";

@Injectable()
export class ReviewService {
    constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) { }

    async findAll(): Promise<Review[]> {
        return this.reviewModel.find().exec();
    }

    async findById(reviewId: string): Promise<Review> {
        return this.reviewModel.findOne({
            _id: reviewId
        }).exec();
    }

    async create(reviewDto: ReviewDto): Promise<Review> {
        return this.reviewModel.create(reviewDto);
    }

    async update(reviewId: string, reviewDto: ReviewDto): Promise<Review> {
        return this.reviewModel.findOneAndUpdate({
            _id: reviewId
        }, reviewDto).exec();
    }

    async deleteById(reviewId: string) {
        return this.reviewModel.findOneAndDelete({
            _id: reviewId
        }).exec();
    }
}