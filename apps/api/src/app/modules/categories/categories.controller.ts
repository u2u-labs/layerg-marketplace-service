import { GetAllCategoryDto } from '@/apps/api/src/app/modules/categories/dto/query-category.dto';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll(@Query() input: GetAllCategoryDto) {
    // return this.categoriesService.findAll(input);
  }
}
