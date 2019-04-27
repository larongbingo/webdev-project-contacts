import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return [
      queryInterface.addColumn(
        "users",
        "createdAt",
        {
          type: Sequelize.DATE,
        },
      ),
      queryInterface.addColumn(
        "users",
        "updatedAt",
        {
          type: Sequelize.DATE,
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
    ];
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return [
      queryInterface.removeColumn("users", "createdAt"),
      queryInterface.removeColumn("users", "updatedAt"),
      queryInterface.removeColumn("users", "deletedAt"),
    ];
  },
};
