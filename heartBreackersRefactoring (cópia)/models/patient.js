'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.Doctor);
    }
  }
  Patient.init({
    photo: DataTypes.BLOB,
    name: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    rg: DataTypes.INTEGER,
    birth_date: DataTypes.DATE,
    address: DataTypes.STRING,
    cell: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    gender: DataTypes.STRING,
    blood_type: DataTypes.STRING,
    cid: DataTypes.STRING,
    complaint: DataTypes.STRING,
    disease_history: DataTypes.STRING,
    allergies: DataTypes.STRING,
    conduct: DataTypes.STRING,
    physical_state: DataTypes.STRING,
    exams: DataTypes.BLOB,
    diagnostic_hypothesis: DataTypes.STRING,
    results: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};