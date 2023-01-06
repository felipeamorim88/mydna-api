import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional/professional.controller';
import { ProfessionalModule } from './professional/professional.module';
import { ProfessionalService } from './professional/professional.service';
import { ProfessionalTypeController } from './professionalType/professional-type.controller';
import { ProfessionalTypeModule } from './professionalType/professional-type.module';
import { ProfessionalTypeService } from './professionalType/professional-type.service';

@Module({
  imports: [ProfessionalTypeModule,ProfessionalModule],
  controllers: [ProfessionalTypeController, ProfessionalController],
  providers: [ ProfessionalTypeService, ProfessionalService],
})
export class AppModule {}
