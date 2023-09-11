import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BedDto } from "src/dto/bed.dto";
import { Bed } from "src/schema/bed.schema";
import { BedService } from "src/service/bed.service";

@Controller('bed')
export class BedController {
    constructor(private readonly bedService: BedService) { }

    @Get()
    async getAll(): Promise<Bed[]> {
        return this.bedService.findAll();
    }

    @Get(':bedId')
    async getById(@Param('bedId') bedId: string): Promise<Bed> {
        return this.bedService.findById(bedId);
    }

    @Post()
    async create(@Body() bedDto: BedDto): Promise<Bed> {
        return this.bedService.create(bedDto);
    }

    @Put(':bedId')
    async update(@Param('bedId') bedId: string, @Body() bedDto: BedDto): Promise<Bed> {
        return this.bedService.update(bedId, bedDto);
    }

    @Delete(':bedId')
    async deleteById(@Param('bedId') bedId: string) {
        return this.bedService.deleteById(bedId);
    }
}