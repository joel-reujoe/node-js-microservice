require('../DBUtil/lib/db')
const User = require('./User')
const Todos  = require('./Todos')

User.hasMany(Todos)

sequelize.sync().then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})