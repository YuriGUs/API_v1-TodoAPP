import {
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { DeleteCategoryService } from 'src/services/category/delete-category.service';

@Controller('category')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryService: DeleteCategoryService) {}

  @Delete('deleteById')
  async deleteCategory(@Query('id') id: string) {
    try {
      await this.deleteCategoryService.deleteCategory({ id });
      return { message: 'Category deleted with success' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
