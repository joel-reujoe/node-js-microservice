
const db = require('../../DAL');
const caches = require('../../Cache').userCache


const createUser = async(call, callback)=>{
    const user = call.request;
    const result = await caches.createUser(user);
    callback(null, result);
}

const updateUser = async(call, callback)=>{
    const user = call.request;
    const result = await caches.updateUser(user);
    callback(null, result);
}

function getUser(call,callback){
    const user = call.request;
    db.getUser(user).then((result)=>{
        console.log(result)
        callback(null,result)
    }).catch((e)=>{
        callback(e)
    })
}

const getUserList=async(call,callback)=>{
    const result = await caches.getUsers();
    callback(null,{"Users":result})
}

module.exports = {
    createUser,
    updateUser,
    getUserList,
    getUser
};


