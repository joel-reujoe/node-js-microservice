const User = require('../Models/User')

const saveUser = (data) => new Promise((async(resolve, reject) => {
    try {
        const resp =await User.create({"firstName":data.FirstName,"age":data.Age})
        const result = {
            "Id":resp.id,
            "FirstName":resp.firstName,
            "Age":resp.age
        }
        resolve(result)
        
    } catch (e) {
        console.log(e)
        reject(e);
    }
}));

const updateUser = (data)=> new Promise(async(resolve,reject)=>{
    try{
        console.log(data)
        const resp = await User.update({"firstName":data.FirstName,"age":data.Age},{where:{"id":data.Id}})
        if(resp[0]===1)
        {
            const result = {
                "FirstName":data.FirstName,
                "Age":data.Age
            }
            resolve(result)
        }
        else{
            throw new OperationCanceledException()
        }
        
    }catch(e)
    {
        console.log(e)
        reject(e)
    }
})


const getUser = (data)=>new Promise(async(resolve,reject)=>{
    try{
        console.log(data)
        const resp = await User.findAll({where:{"id":data.Id}})
        console.log(resp)
        const result = {
            "Id":resp[0].id,
            "FirstName":resp[0].firstName,
            "Age":resp[0].age
        }
        resolve(result)
    }catch(e)
    {
        console.log(e)
        reject(e)
    }

})


const getUsers = ()=>new Promise(async(resolve,reject)=>{
    try{
        const users = await User.findAll();
        const userList = []
        for(let i=0;i<users.length;i++)
        {
            userList.push({
                "Id":users[i].id,
                "FirstName":users[i].firstName,
                "Age":users[i].age
            })
        }
        resolve(userList)
    }catch(e)
    {
        console.log(e)
        reject(e)
    }
})


module.exports = {
    saveUser,
    updateUser,
    getUsers,
    getUser
};