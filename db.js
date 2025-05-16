const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ct_kor_chok_dee_db", "root", "rootmysql", {
  host: "localhost", // ou outro host, se for remoto
  dialect: "mysql",
});

module.exports = sequelize;
