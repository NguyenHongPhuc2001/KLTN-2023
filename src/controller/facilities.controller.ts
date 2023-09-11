import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FacilitesDto } from "src/dto/facilities.dto";
import { Facilities } from "src/schema/facilities.schema";
import { FacilitiesService } from "src/service/facilities.service";

@Controller('facilities')
export class FacilitiesController {
    constructor(private readonly facilitiesService: FacilitiesService) { }

    @Get()
    async getAll(): Promise<Facilities[]> {
        return this.facilitiesService.findAll();
    }

    @Get(':facilitiesId')
    async getById(@Param('facilitiesId') facilitiesId: string): Promise<Facilities> {
        return this.facilitiesService.findById(facilitiesId);
    }

    @Post()
    async create(@Body() facilitiesDto: FacilitesDto): Promise<Facilities> {
        return this.facilitiesService.create(facilitiesDto);
    }

    @Put(':facilitiesId')
    async update(@Param('facilitiesId') facilitiesId: string, @Body() facilitiesDto: FacilitesDto): Promise<Facilities> {
        return this.facilitiesService.update(facilitiesId, facilitiesDto);
    }

    @Delete(':facilitiesId')
    async deleteById(@Param('facilitiesId') facilitiesId: string) {
        return this.facilitiesService.deleteById(facilitiesId);
    }
}