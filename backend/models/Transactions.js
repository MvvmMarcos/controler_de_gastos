const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');

const Transactions = db.define('Transactions', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        require: true
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false,
        require: false
    },
    money:{
        type:DataTypes.INTEGER,
        allowNull:false,
        require:true
    },
    transactionType:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
        require:true
    }
})
Transactions.belongsTo(User);
User.hasMany(Transactions);
module.exports = Transactions