import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EditCategoryDto } from 'src/dto/edit-category.dto';
import { EditCategoryService } from 'src/services/category/edit-category.service';

@ApiTags('Categorias')
@Controller('category')
export class EditCategoryController {
  constructor(private readonly editCategoryService: EditCategoryService) {}

  @Put(':id')
  async editCategory(
    @Param('id') id: string,
    @Body() editCategoryDto: EditCategoryDto,
  ) {
    try {
      editCategoryDto.id = id; // to Param
      return this.editCategoryService.editCategory(editCategoryDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
