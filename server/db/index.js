const db = require("./database");
const Clubs = require("./Clubs");
const Players = require("./Players");

Players.belongTo(Clubs);
Clubs.hasMany(Players);

module.exports = {
  db,
  Clubs,
  Players
};
