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
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { GetCurrentUser } from '../../decorators/get-current-user.decorator';
import { User } from '@prisma/client';
import { AddToCartDTO } from './dto/add-to-cart.dto';
import { RemoveFromCartDTO } from './dto/remove-from-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('')
  @UseGuards(AuthenticatedGuard)
  async getUserCart(@GetCurrentUser() user: User) {
    return await this.cartService.getUserCart(user.id);
  }

  @Post('/items')
  @UseGuards(AuthenticatedGuard)
  async addToCart(@Body() body: AddToCartDTO, @GetCurrentUser() user: User) {
    return await this.cartService.addToCart(user.id, body);
  }

  @Delete('/items')
  @UseGuards(AuthenticatedGuard)
  async removeFromCart(
    @Body() body: RemoveFromCartDTO,
    @GetCurrentUser() user: User,
  ) {
    return await this.cartService.removeFromCart(user.id, body);
  }
}
