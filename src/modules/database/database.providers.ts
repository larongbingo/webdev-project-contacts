import { Provider } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";

import { sequelizeDatabase } from "../../constants/database";
import { User } from "../user/user.entity";
import { Message } from "../messages/message.entity";

export const databaseProviders: Provider[] = [
  {
    provide: sequelizeDatabase,
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: "azgh",
        username: process.env.MYSQL_USERNAME || "root",
        password: process.env.MYSQL_PASSWORD || "root",
        host: process.env.MYSQL_HOST || "127.0.0.1",
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
