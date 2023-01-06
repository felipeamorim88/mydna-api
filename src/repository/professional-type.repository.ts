import mysqlDataSource from "src/datasource/mysql-datasource";
import { ProfessionalType } from "src/entity/professional-type.entity";
import { ProfessionalTypeDto } from "src/professionalType/professional-type.interface";

export const ProfessionalTypeRepository = mysqlDataSource.getRepository(ProfessionalType)