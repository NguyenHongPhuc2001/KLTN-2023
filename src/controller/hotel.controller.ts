import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { HotelDto } from "src/dto/hotel.dto";
import { Hotel } from "src/schema/hotel.schema";
import { HotelService } from "src/service/hotel.service";

@Controller('hotel')
export class HotelController {
    constructor(private readonly hotelService: HotelService) { }

    @Get()
    async getAll(): Promise<Hotel[]> {
        return this.hotelService.findAll();
    }

    @Get(':hotelId')
    async getById(@Param('hotelId') hotelId: string): Promise<Hotel> {
        return this.hotelService.findById(hotelId);
    }

    @Post()
    async create(@Body() hotelDto: HotelDto): Promise<Hotel> {
        return this.hotelService.create(hotelDto);
    }

    @Put(':hotelId')
    async update(@Param('hotelId') hotelId: string, @Body() hotelDto: HotelDto): Promise<Hotel> {
        return this.hotelService.update(hotelId, hotelDto);
    }

    @Delete(':hotelId')
    async deleteById(@Param('hotelId') hotelId: string) {
        return this.hotelService.deleteById(hotelId);
    }

}