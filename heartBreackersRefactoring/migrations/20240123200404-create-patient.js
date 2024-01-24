'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.BLOB
      },
      name: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      rg: {
        type: Sequelize.INTEGER
      },
      birth_date: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      cell: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      gender: {
        type: Sequelize.STRING
      },
      blood_type: {
        type: Sequelize.STRING
      },
      cid: {
        type: Sequelize.STRING
      },
      complaint: {
        type: Sequelize.STRING
      },
      disease_history: {
        type: Sequelize.STRING
      },
      allergies: {
        type: Sequelize.STRING
      },
      conduct: {
        type: Sequelize.STRING
      },
      physical_state: {
        type: Sequelize.STRING
      },
      exams: {
        type: Sequelize.BLOB
      },
      diagnostic_hypothesis: {
        type: Sequelize.STRING
      },
      results: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};