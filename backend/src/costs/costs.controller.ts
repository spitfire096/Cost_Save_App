import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CostsService } from './costs.service';
import { CreateCostDto } from './dto/create-cost.dto';

@Controller('costs')
export class CostsController {
  constructor(private readonly costsService: CostsService) {}

  @Post()
  create(@Body() createCostDto: CreateCostDto) {
    return this.costsService.create(createCostDto);
  }

  @Get()
  findAll() {
    return this.costsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCostDto: CreateCostDto) {
    return this.costsService.update(id, createCostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costsService.remove(id);
  }
}