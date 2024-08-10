import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { CreateCategoryService } from 'src/services/category/create-category.service';

@ApiTags('Categorias')
@Controller('category')
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post('create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.createCategoryService.createCategory(createCategoryDto);
  }
}
