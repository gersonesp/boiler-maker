import Sequelize from "sequelize";

const db = new Sequelize("postgres://localhost:5432/football", {
  logging: false
});

module.exports = db;
