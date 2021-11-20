
const { cacheUtils } = require('newj-core/CacheUtil/lib')
const usersDal = require('../DAL')


const updateUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        const dataResult = await usersDal.updateUser(data);
        cacheUtils.removeCache(cacheRegistry.getUsersCache)
        resolve(dataResult)
    })
}

const createUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        const dataResult = await usersDal.saveUser(data);
        cacheUtils.removeCache(cacheRegistry.getUsersCache)
        resolve(dataResult)
    })
}

const getUser = ()=>{
    return new Promise()
}

const getUsers = ()=>{
    return new Promise(async(resolve,reject)=>{
        const response = await cacheUtils.getCache(cacheRegistry.getUsersCache,usersDal.getUsers)
        resolve(response)
    })    
}

module.exports = {
    getUsers,
    createUser,
    updateUser
}