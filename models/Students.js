const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // ou './db' se estiver na mesma pasta

const Students = sequelize.define(
  "Students",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "students",
    timestamps: false, // coloque `true` se sua tabela tiver createdAt/updatedAt
  }
);

module.exports = Students;
