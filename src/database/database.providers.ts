import { Sequelize } from "sequelize-typescript";

import { sequelizeDatabase } from "../constants/database";

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
        
      ]);

      await sequelize.sync();
      
      return sequelize;
    },
  },
];
