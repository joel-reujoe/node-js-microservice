const { loadClient } = require('newj-core/ProtoUtil')
const client = loadClient('todo.proto',"localhost:3000")


client.CreateUser({
    "Id":-1,
    "FirstName":"joel dsouza",
    "Age":25
},(err,response)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(response)
    }
})

// const call = client.ReadToDoStream()
// call.on("data",item=>{
//     console.log(item)
// })

// call.on("end",(e)=>console.log("done"))