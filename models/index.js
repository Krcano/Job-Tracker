const Users = require("./Users");
const Jobs = require("./JobData");
const Reviews = require("./Reviews");

Users.hasMany(Jobs, {
  foreignKey: "users_id",
  onDelete: "CASCADE",
});
Users.hasMany(Reviews, {
  foreignKey: "users_id",
  onDelete: "CASCADE"
});
Reviews.belongsTo(Users, {
  foreignKey: "users_id",
});
// Jobs.belongsTo(Users, {
//   foreignKey: "users_id"
// })

module.exports = { Users, Jobs, Reviews }