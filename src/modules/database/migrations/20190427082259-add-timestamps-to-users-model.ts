import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return Promise.all([
      queryInterface.addColumn(
        "users",
        "createdAt",
        {
          type: Sequelize.DATEONLY,
        },
      ),
      queryInterface.addColumn(
        "users",
        "updatedAt",
        {
          type: Sequelize.DATEONLY,
        },
      ),
      queryInterface.addColumn(
        "users",
        "deletedAt",
        {
          type: Sequelize.DATE,
          allowNull: true,
        },
      ),
    ]);
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return Promise.all([
      queryInterface.removeColumn("users", "createdAt"),
      queryInterface.removeColumn("users", "updatedAt"),
      queryInterface.removeColumn("users", "deletedAt"),
    ]);
  },
};
