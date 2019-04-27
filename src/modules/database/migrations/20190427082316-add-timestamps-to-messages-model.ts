import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return [
      queryInterface.addColumn(
        "messages",
        "createdAt",
        {
          type: Sequelize.DATE,
        },
      ),
      queryInterface.addColumn(
        "messages",
        "updatedAt",
        {
          type: Sequelize.DATE,
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
    ];
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return [
      queryInterface.removeColumn("messages", "createdAt"),
      queryInterface.removeColumn("messages", "updatedAt"),
      queryInterface.removeColumn("messages", "deletedAt"),
    ];
  },
};
