import mysqlDataSource from "src/datasource/mysql-datasource";
import { ProfessionalType } from "src/entity/professional-type.entity";
import { Professional } from "src/entity/professional.entity";

export const ProfessionalRepository = mysqlDataSource.getRepository(Professional)