import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable(
      "messages", 
      {
        title: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        message: {
          type: Sequelize.TEXT,
        },
        isRead: {
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
    );
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.dropTable("messages");
  },
};
