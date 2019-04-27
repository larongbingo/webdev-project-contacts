import { QueryInterface, SequelizeStatic } from "sequelize";
import { hashSync } from "bcrypt";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.bulkInsert("users", [{username: "admin", password: hashSync("admin", 12)}]);
  },
  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.bulkDelete("users", {username: "admin"});
  },
};
