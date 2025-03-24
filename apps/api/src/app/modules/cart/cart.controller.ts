import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { GetCurrentUser } from '../../decorators/get-current-user.decorator';
import { User } from '@prisma/client';
import { AddToCartDTO } from './dto/add-to-cart.dto';
import { RemoveFromCartDTO } from './dto/remove-from-cart.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../auth/guards/auth.guard';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('')
  @UseGuards(AuthenticationGuard)
  async getUserCart(@GetCurrentUser() user: User) {
    return await this.cartService.getUserCart(user.id);
  }

  @Post('/items')
  @UseGuards(AuthenticationGuard)
  async addToCart(@Body() body: AddToCartDTO, @GetCurrentUser() user: User) {
    return await this.cartService.addToCart(user.id, body);
  }

  @Delete('/items')
  @UseGuards(AuthenticationGuard)
  async removeFromCart(
    @Body() body: RemoveFromCartDTO,
    @GetCurrentUser() user: User,
  ) {
    return await this.cartService.removeFromCart(user.id, body);
  }
}
