import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfessionalTypeService } from './professional-type.service';
import { ProfessionalType } from 'src/entity/professional-type.entity';
import { ProfessionalTypeDto } from './professional-type.interface';

@Controller('professional-type')
export class ProfessionalTypeController {
  constructor(private professionalTypeService: ProfessionalTypeService) {}

  @Get()
  async findAll(): Promise<ProfessionalType[]> {
    return await this.professionalTypeService.findAll();
  }
  @Get('/:id')
  async findOne(@Param('id') id): Promise<ProfessionalType> {
    return await this.professionalTypeService.findOne(id);
  }
  @Post()
  async create(@Body()professionalType: ProfessionalTypeDto): Promise<ProfessionalType>{
    console.log(professionalType)
    return await this.professionalTypeService.create(professionalType)
  }
  @Patch('/:id')
  async update(@Param('id') id,@Body()professionalType: ProfessionalTypeDto): Promise<ProfessionalType>{
    return await this.professionalTypeService.update(id, professionalType)
  }
  @Delete('/:id')
  async Delete(@Param('id') id): Promise<ProfessionalType> {
    return await this.professionalTypeService.delete(id);
  }
}