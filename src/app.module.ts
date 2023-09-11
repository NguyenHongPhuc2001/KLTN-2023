import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusModule } from './module/status.module';
import { UserModule } from './module/user.module';
import { BedModule } from './module/bed.module';
import { DiscountModule } from './module/discount.module';
import { ReviewModule } from './module/review.module';
import { RoomTypeModule } from './module/roomType.module';
import { FacilitiesModule } from './module/facilities.module';
import { HotelModule } from './module/hotel.module';
import { OrderModule } from './module/order.module';
import { PaymentModule } from './module/payment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'hotel' }),
    StatusModule,
    UserModule,
    BedModule,
    DiscountModule,
    ReviewModule,
    RoomTypeModule,
    FacilitiesModule,
    HotelModule,
    OrderModule,
    PaymentModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
