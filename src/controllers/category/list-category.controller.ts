import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListCategoryService } from 'src/services/category/list-category.service';

@ApiTags('Categorias')
@Controller('category')
export class ListCategoryController {
  constructor(private readonly listCategoryService: ListCategoryService) {}

  @Get('list')
  async listCategoryController() {
    try {
      return this.listCategoryService.listCategory();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
