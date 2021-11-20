const Sequelize = require('sequelize')
module.exports = sequelize.define("User",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        age:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
});
