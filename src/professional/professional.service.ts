import { Inject, Injectable } from '@nestjs/common';
import { ProfessionalType } from 'src/entity/professional-type.entity';
import { Professional } from 'src/entity/professional.entity';
import {ProfessionalRepository} from 'src/repository/professional.repository';
import { ProfessionalDto } from "src/professional/professional.interface";

@Injectable()
export class ProfessionalService {
  async findAll(): Promise<Professional[]> {
    return await ProfessionalRepository.find({
      relations: {
      professionalType: true,
  }});
  }
  async findOne(id:string): Promise<Professional> {
    return await ProfessionalRepository.findOneBy({id:parseInt(id)});
  }
  async create(professional: ProfessionalDto): Promise<Professional> {
    return await ProfessionalRepository.save(professional);
  }
  async update(id:string, professional: ProfessionalDto): Promise<any> {
    return await ProfessionalRepository.update(id,professional);
  }
  async delete(id:string): Promise<any> {
    return await ProfessionalRepository.delete(id);
  }
}