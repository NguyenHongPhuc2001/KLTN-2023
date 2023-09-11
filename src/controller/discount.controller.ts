import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DiscountDto } from "src/dto/discount.dto";
import { Discount } from "src/schema/discount.schema";
import { DiscountService } from "src/service/discount.service";

@Controller('discount')
export class DiscountController {
    constructor(private readonly discountService: DiscountService) { }


    @Get(':discountId')
    async getById(@Param('discountId') discountId: string): Promise<Discount> {
        return this.discountService.findById(discountId);
    }

    @Get()
    async getAll(): Promise<Discount[]> {
        return this.discountService.findAll();
    }

    @Post()
    async create(@Body() discountDto: DiscountDto): Promise<Discount> {
        discountDto.start = new Date(discountDto.start);
        discountDto.end = new Date(discountDto.end);
        discountDto.created_at = new Date();
        discountDto.updated_at = new Date();
        return this.discountService.create(discountDto);
    }

    @Put(':discountId')
    async update(@Param('discountId') discountId: string, @Body() discountDto: DiscountDto): Promise<Discount> {
        discountDto.updated_at = new Date();
        return this.discountService.update(discountId, discountDto);
    }

    @Delete(':discountId')
    async deleteById(@Param('discountId') discountId: string) {
        return this.discountService.deleteById(discountId);
    }
}