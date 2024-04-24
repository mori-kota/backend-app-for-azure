const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING(64), allowNull: false },
    email: { type: DataTypes.STRING(64), allowNull: false },
    inquiry: { type: DataTypes.TEXT, allowNull: false },
  };
  return sequelize.define('Inquiry', attributes);
}