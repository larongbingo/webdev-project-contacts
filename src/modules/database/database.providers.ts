import { Sequelize } from "sequelize-typescript";

import { sequelizeDatabase } from "../../constants/database";
import { User } from "src/modules/user/user.entity";

export const databaseProviders = [
  {
    provide: sequelizeDatabase,
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: "azgh",
        username: "root",
        password: "root",
        dialect: "mysql",
      });

      sequelize.addModels([
        User,
      ]);

      await sequelize.sync();
      
      return sequelize;
    },
  },
];
