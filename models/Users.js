//Creates and updates the users table
const { Model, DataTypes, DATE } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class Users extends Model {
  checkPassword(loginPw) {
    console.log(bcrypt.compareSync(loginPw, this.password));
    return bcrypt.compareSync(loginPw, this.password);
  }
}


Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32],
      },
      // added confirmed for nodemailer purposes to check if theyre account has been verified or not
      confirmed:{
        type:DataTypes.BOOLEAN,
        default:false
      }
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
