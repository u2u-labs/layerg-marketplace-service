import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { CreateBulkDto, CreateSingleDto } from './dto/create-order.dto';
import {
  ActionOrderDto,
  VerifyOrderDto,
  VerifyOrdersDto,
} from './dto/get-order.dto';
import { OrderService } from './order.service';

import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/single')
  @UseGuards(AuthenticationGuard)
  createSingle(
    @Body() createOrderDto: CreateSingleDto,
    @GetCurrentUser() user: User,
  ) {
    return this.orderService.createSingle(createOrderDto, user);
  }

  @Post('/verify')
  @UseGuards(AuthenticationGuard)
  verifyOrder(@Body() input: VerifyOrderDto, @GetCurrentUser() user: User) {
    return this.orderService.verifyOrder(input, user);
  }

  @Post('/verify-list')
  @UseGuards(AuthenticationGuard)
  verifyOrders(@Body() input: VerifyOrdersDto, @GetCurrentUser() user: User) {
    return this.orderService.verifyOrders(input, user);
  }

  @Post('/pending')
  @UseGuards(AuthenticationGuard)
  pendingOrder(@Body() input: ActionOrderDto, @GetCurrentUser() user: User) {
    return this.orderService.actionOrder(input, user);
  }

  @Post('/generate-bulk-data')
  @UseGuards(AuthenticationGuard)
  generateBulkData(
    @Body() createOrderBulkDto: CreateBulkDto,
    @GetCurrentUser() user: User,
  ) {
    return this.orderService.generateMerkleTree(createOrderBulkDto, user);
  }

  @Post('/bulk')
  @UseGuards(AuthenticationGuard)
  createBulk(
    @Body() createOrderBulkDto: CreateBulkDto,
    @GetCurrentUser() user: User,
  ) {
    return this.orderService.createBulk(createOrderBulkDto, user);
  }
}
