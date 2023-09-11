import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Status } from "src/schema/status.schema";
import { StatusService } from "src/service/status.service";
import { StatusDto } from "../dto/status.dto";

@Controller('status')
export class StatusController {
    constructor(
        private readonly statusService: StatusService
    ) { }

    @Get(':statusId')
    async getStatusById(@Param('statusId') statusId: string): Promise<Status> {
        return this.statusService.getStatusById(statusId);
    }

    @Get('byName')
    async getByName(@Query('name') name: string): Promise<Status> {
        return this.statusService.getByName(name);
    }

    @Get()
    async getAllStatus(): Promise<Status[]> {
        return this.statusService.getAll();
    }

    @Post()
    async createStaus(@Body() request: StatusDto): Promise<Status> {
        request.created_at = new Date();
        request.updated_at = new Date();
        return this.statusService.create(request);
    }

    @Delete(':statusId')
    async deleteById(@Param('statusId') statusId: string) {
        return this.statusService.deleteById(statusId);
    }

    @Put(':statusId')
    async update(@Param('statusId') statusId: string, @Body() request: StatusDto): Promise<Status> {
        let updateDate:Date = new Date();
        request.updated_at = updateDate;
        return this.statusService.update(statusId, request);
    }

}