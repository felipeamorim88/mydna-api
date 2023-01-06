import { Module } from '@nestjs/common';
import { ProfessionalTypeController } from './professional-type.controller';
import { ProfessionalTypeService } from './professional-type.service';

@Module({
  imports: [],
  controllers: [ProfessionalTypeController],
  providers: [ProfessionalTypeService],
})
export class ProfessionalTypeModule {}
