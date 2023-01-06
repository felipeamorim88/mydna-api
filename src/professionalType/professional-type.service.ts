import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessionalType } from 'src/entity/professional-type.entity';
import {ProfessionalTypeRepository} from 'src/repository/professional-type.repository';
import { ProfessionalTypeDto } from './professional-type.interface';

@Injectable()
export class ProfessionalTypeService {
  async findAll(): Promise<ProfessionalType[]> {
    return await ProfessionalTypeRepository.find();
  }
  async findOne(id:string): Promise<ProfessionalType> {
    return await ProfessionalTypeRepository.findOneBy({id:parseInt(id)});
  }
  async create(professionalType: ProfessionalTypeDto): Promise<ProfessionalType> {
    return await ProfessionalTypeRepository.save(professionalType);
  }
  async update(id:string, professionalType: ProfessionalTypeDto): Promise<any> {
    return await ProfessionalTypeRepository.update(id,professionalType);
  }
  async delete(id:string): Promise<any> {
    return await ProfessionalTypeRepository.delete(id);
  }
}