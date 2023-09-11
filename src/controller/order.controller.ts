import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderDto } from "src/dto/order.dto";
import { Order } from "src/schema/order.schema";
import { OrderService } from "src/service/order.service";

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get()
    async getAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':orderId')
    async getById(@Param('orderId') orderId: string): Promise<Order> {
        return this.orderService.findById(orderId);
    }

    @Post()
    async create(@Body() orderDto: OrderDto): Promise<Order> {
        return this.orderService.create(orderDto);
    }

    @Put(':orderId')
    async update(@Param('orderId') orderId: string, @Body() orderDto: OrderDto): Promise<Order> {
        return this.orderService.update(orderId, orderDto);
    }

    @Delete(':orderId')
    async deleteById(@Param('orderId') orderId: string) {
        return this.orderService.deleteById(orderId);
    }
}