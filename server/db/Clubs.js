const Sequelize = require("sequelize");
const db = require("./database");

const Clubs = db.define("clubs", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.madisondodgeronline.com/wp-content/uploads/2016/09/IMG_9097.png"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Clubs;
