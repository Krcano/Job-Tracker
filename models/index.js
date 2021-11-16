const Users = require("./Users");
const Jobs = require("./JobData");
const Reviews = require("./Reviews");

Users.hasmany(Jobs, {
  foreignKey: "users_id",
  onDelete: "CASCADE",
});
Reviews.belongsTo(Users, {
  foreignKey: "users_id",
});
