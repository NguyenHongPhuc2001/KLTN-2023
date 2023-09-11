import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ReviewDto } from "src/dto/review.dto";
import { Review } from "src/schema/review.schema";
import { ReviewService } from "src/service/review.service";

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }

    @Get()
    async getAll(): Promise<Review[]> {
        return this.reviewService.findAll();
    }

    @Get(':reviewId')
    async getById(@Param('reviewId') reviewId: string): Promise<Review> {
        return this.reviewService.findById(reviewId);
    }

    @Post()
    async create(@Body() reviewDto: ReviewDto): Promise<Review> {
        reviewDto.created_at = new Date();
        reviewDto.updated_at = new Date();
        return this.reviewService.create(reviewDto);
    }

    @Put(':reviewId')
    async update(@Param('reviewId') reviewId: string, @Body() reviewDto: ReviewDto): Promise<Review> {
        return this.reviewService.update(reviewId, reviewDto);
    }

    @Delete(':reviewId')
    async deleteById(@Param('reviewId') reviewId: string) {
        return this.reviewService.deleteById(reviewId);
    }
}