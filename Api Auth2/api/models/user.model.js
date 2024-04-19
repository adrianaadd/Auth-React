
const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
     },
    role: {
      type: DataTypes.ENUM("Admin", "Client"),
      defaultValue:"Client",
      allowNull: false,
     },
   password: {
      type: DataTypes.STRING,
      allowNull: false,
     },
  },
   {
    	//opciones
      createdAt:false,
    	updatedAt: false,
    	}
);

module.exports = User;