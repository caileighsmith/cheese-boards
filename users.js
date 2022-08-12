const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize')

let User = db.define('User',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
})

module.exports = {
    User
}