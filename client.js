const { loadClient } = require('newj-core/ProtoUtil')
const client = loadClient('todo.proto',"34.136.37.30:3000")


client.GetUsers({
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