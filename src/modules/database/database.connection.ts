import { Sequelize } from "sequelize-typescript";

import { User } from "../user/user.entity";
import { Message } from "../messages/message.entity";

export const databaseConnection = new Sequelize({
  database: "azgh",
  username: process.env.MYSQL_USERNAME || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: Number(process.env.MYSQL_PORT) || 3306,
  dialect: "mysql",
});

databaseConnection.addModels([
  User,
  Message,
]);
