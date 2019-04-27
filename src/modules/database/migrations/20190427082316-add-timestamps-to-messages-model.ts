import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return Promise.all([
      queryInterface.addColumn(
        "messages",
        "createdAt",
        {
          type: Sequelize.DATEONLY,
        },
      ),
      queryInterface.addColumn(
        "messages",
        "updatedAt",
        {
          type: Sequelize.DATEONLY,
        },
      ),
      queryInterface.addColumn(
        "messages",
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
      queryInterface.removeColumn("messages", "createdAt"),
      queryInterface.removeColumn("messages", "updatedAt"),
      queryInterface.removeColumn("messages", "deletedAt"),
    ]);
  },
};
