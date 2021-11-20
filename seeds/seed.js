const sequelize = require("../config/connection");
const { Reviews } = require("../models");
const Users = require("../models/Users");
const reviewData = require('./reviewData.json')
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Reviews.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  })
  process.exit(0);

 
};

seedDatabase();
