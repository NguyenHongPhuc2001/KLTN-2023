import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PaymentDto } from "src/dto/payment.dto";
import { Payment } from "src/schema/payment.schema";
import { PaymentService } from "src/service/payment.service";

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @Get()
    async getAll(): Promise<Payment[]> {
        return this.paymentService.findAll();
    }

    @Get(':paymentId')
    async getById(@Param('paymentId') paymentId: string): Promise<Payment> {
        return this.paymentService.findById(paymentId);
    }

    @Post()
    async create(@Body() paymentDto: PaymentDto): Promise<Payment> {
        return this.paymentService.create(paymentDto);
    }

    @Put(':paymentId')
    async update(@Param('paymentId') paymentId: string, @Body() paymentDto: PaymentDto): Promise<Payment> {
        return this.paymentService.update(paymentId, paymentDto);
    }

    @Delete(':paymentId')
    async deleteById(@Param('paymentId') paymentId: string) {
        return this.paymentService.deleteById(paymentId);
    }
}