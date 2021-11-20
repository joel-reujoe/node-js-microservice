
const Sequelize = require('sequelize')
module.exports = sequelize.define("Todos",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
});