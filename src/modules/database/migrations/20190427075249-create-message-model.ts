import { QueryInterface, SequelizeStatic } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable(
      "messages", 
      {
        id: {
          type: Sequelize.INTEGER,
        },
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
      },
    );
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.dropTable("messages");
  },
};
