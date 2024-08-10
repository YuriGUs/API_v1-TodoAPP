import {
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteCategoryService } from 'src/services/category/delete-category.service';
import { DeleteCategoryDto } from 'src/dto/delete-category.dto';

@ApiTags('Categorias')
@Controller('category')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryService: DeleteCategoryService) {}

  @Delete('deleteById')
  async deleteCategory(@Body() deleteCategoryDto: DeleteCategoryDto) {
    try {
      await this.deleteCategoryService.deleteCategory(deleteCategoryDto);
      return { message: 'Category deleted with success' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
