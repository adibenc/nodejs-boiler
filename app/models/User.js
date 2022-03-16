const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/dbcon');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  email_verified_at: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  is_active: {
    type: DataTypes.STRING,
    defaultValue: 1
  },
  remember_token: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "customer"
  },
}, {
  sequelize, // db seq instance
  modelName: 'User',
  tableName: "users",
  
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

module.exports = User