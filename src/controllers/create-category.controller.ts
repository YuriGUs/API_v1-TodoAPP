import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { CreateCategoryService } from 'src/services/create-category.service';

@Controller()
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post('category')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.createCategoryService.createCategory(createCategoryDto);
  }
}
