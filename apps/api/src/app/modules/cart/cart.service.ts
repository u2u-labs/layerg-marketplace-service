import { Injectable } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { AddToCartDTO } from './dto/add-to-cart.dto';
import { NotFoundError } from 'rxjs';
import { RemoveFromCartDTO } from './dto/remove-from-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserCart(userId: string) {
    return await this.prisma.cart.findFirst({
      where: {
        userId,
      },
      include: {
        cartItems: {
          include: {
            nft: {
              select: {
                id: true,
                name: true,
                image: true,
                description: true,
                nameSlug: true,
                collection: {
                  select: {
                    id: true,
                    name: true,
                    address: true,
                    avatar: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async addToCart(userId: string, addToCartDTO: AddToCartDTO) {
    // check if cart already existed
    const existedCart = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });
    // if not existed, create new cart
    if (!existedCart) {
      return await this.prisma.cart.create({
        data: {
          userId,
          cartItems: {
            create: {
              nftId: addToCartDTO.nftId,
              amount: addToCartDTO.amount,
              collectionId: addToCartDTO.collectionId,
            },
          },
        },
      });
    }
    // if existed, check if item already existed in cart
    const existedItem = await this.prisma.cartItem.findFirst({
      where: {
        cartId: existedCart.id,
        nftId: addToCartDTO.nftId,
        collectionId: addToCartDTO.collectionId,
      },
    });
    // if existed, update amount
    if (existedItem) {
      const updatedAmount = existedItem.amount + addToCartDTO.amount;
      // if updated amount <= 0, delete item
      if (updatedAmount <= 0) {
        return await this.prisma.cartItem.delete({
          where: {
            id: existedItem.id,
          },
        });
      }
      return await this.prisma.cartItem.update({
        where: {
          id: existedItem.id,
        },
        data: {
          amount: updatedAmount,
        },
      });
    }
    //  if not existed, create new item
    if (addToCartDTO.amount < 0) {
      throw new Error('Amount must be positive');
    }
    return await this.prisma.cartItem.create({
      data: {
        cartId: existedCart.id,
        nftId: addToCartDTO.nftId,
        amount: addToCartDTO.amount,
        collectionId: addToCartDTO.collectionId,
      },
    });
  }

  async removeFromCart(userId: string, removeFromCartDTO: RemoveFromCartDTO) {
    const { nftId, collectionId } = removeFromCartDTO;
    const existedCart = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });
    if (!existedCart) {
      return NotFoundError;
    }
    const existedItem = await this.prisma.cartItem.findFirst({
      where: {
        cartId: existedCart.id,
        nftId,
        collectionId,
      },
    });
    if (!existedItem) {
      return NotFoundError;
    }
    return await this.prisma.cartItem.delete({
      where: {
        id: existedItem.id,
      },
    });
  }
}
