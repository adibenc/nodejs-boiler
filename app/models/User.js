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
  is_active: {
    type: DataTypes.STRING
  },
  remember_token: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING
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