import { ISequelizeConfig } from "sequelize-typescript";

export const development: ISequelizeConfig = {
  database: "azgh",
  username: "root",
  password: "root",
  dialect: "mysql",
};

export const production = {
  database: "azgh",
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
};
