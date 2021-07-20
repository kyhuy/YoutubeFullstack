"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        password: "123456", //plain text sdf23r234r -> hash password
        firstName: "Tony",
        lastName: "Stack",
        email: "tony@marvel.com",
        address: "Marvel",
        gender: 1,
        roleId: "R1",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
