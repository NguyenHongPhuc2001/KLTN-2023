import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RoomTypeDto } from "src/dto/roomType.dto";
import { RoomType } from "src/schema/roomType.schema";
import { RoomTypeService } from "src/service/roomType.service";

@Controller('roomType')
export class RoomTypeController {
    constructor(private readonly roomTypeService: RoomTypeService) { }

    @Get()
    async getAll(): Promise<RoomType[]> {
        return this.roomTypeService.findAll();
    }

    @Get(':roomTypeId')
    async getById(@Param('roomTypeId') roomTypeId: string): Promise<RoomType> {
        return this.roomTypeService.findById(roomTypeId);
    }

    @Post()
    async create(@Body() roomTypeDto: RoomTypeDto): Promise<RoomType> {
        return this.roomTypeService.create(roomTypeDto);
    }

    @Put(':roomTypeId')
    async update(@Param('roomTypeId') roomTypeId: string, @Body() roomTypeDto): Promise<RoomType> {
        return this.roomTypeService.update(roomTypeId, roomTypeDto);
    }

    @Delete(':roomTypeId')
    async deleteById(@Param('roomTypeId') roomTypeId: string) {
        return this.roomTypeService.deleteById(roomTypeId);
    }
}