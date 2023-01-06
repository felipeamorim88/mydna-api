import { ProfessionalType } from "src/entity/professional-type.entity"
import { DataSource } from "typeorm"

const mysqlDataSource = new DataSource({
    "type": "mysql",
    "host": "34.122.74.78",
    "port": 3306,
    "username": "root",
    "password": "5CCA'B)V",
    "database": "mydna",
    "entities": [__dirname + '/../**/*.entity.{js,ts}'],
    "synchronize": true,
    "migrationsRun": true

})
mysqlDataSource.initialize()
export default mysqlDataSource