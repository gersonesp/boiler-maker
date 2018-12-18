const Sequelize = require("sequelize");
const db = require("./database");

const Players = db.define("players", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.madisondodgeronline.com/wp-content/uploads/2016/09/IMG_9097.png"
  }
});

module.exports = Players;
