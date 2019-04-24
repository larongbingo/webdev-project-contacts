import { Provider } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";

import { sequelizeDatabase } from "../../constants/database";
import { User } from "src/modules/user/user.entity";
import { Message } from "../messages/message.entity";

export const databaseProviders: Provider[] = [
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
        Message,
      ]);

      await sequelize.sync();
      
      return sequelize;
    },
  },
];
