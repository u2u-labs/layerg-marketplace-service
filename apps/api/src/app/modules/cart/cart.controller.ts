import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
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
  async getUserCart(@Res() res: any, @GetCurrentUser() user: User) {
    try {
      const cart = await this.cartService.getUserCart(user.id);
      res.status(HttpStatus.OK).json({
        message: 'success',
        data: cart,
      });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'error',
        error: err.message,
        data: null,
      });
    }
  }

  @Post('/items')
  @UseGuards(AuthenticationGuard)
  async addToCart(
    @Res() res: Response,
    @Body() body: AddToCartDTO,
    @GetCurrentUser() user: User,
  ) {
    try {
      await this.cartService.addToCart(user.id, body);
      res.status(HttpStatus.OK).json({
        message: 'success',
      });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'error',
        error: err.message,
        data: null,
      });
    }
  }

  @Delete('/items/:collectionId/:nftId')
  @UseGuards(AuthenticationGuard)
  async removeFromCart(
    @Res() res: Response,
    @Param('collectionId') collectionId: string,
    @Param('nftId') nftId: string,
    @GetCurrentUser() user: User,
  ) {
    try {
      await this.cartService.removeFromCart(user.id, collectionId, nftId);
      res.status(HttpStatus.OK).json({
        message: 'success',
      });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'error',
        error: err.message,
        data: null,
      });
    }
  }
}
