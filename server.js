

require('newj-core/DBUtil/lib')
require('newj-core/CacheUtil/lib')
const { loadProto } = require('newj-core/ProtoUtil')
const {server,package} = loadProto('todo.proto')

var gelfling = require('gelfling')

var client = gelfling()

client.send('Message', function(err) { console.log('Sent') })

client.send({ short_message: 'Message', facility: 'myApp', level: gelfling.INFO })

var complexClient = gelfling('34.136.37.30', 12201, {
  defaults: {
    facility: 'myApp',
    level: gelfling.CRITICAL,
    short_message: function(msg) { var txt = msg.txt; delete msg.txt; return txt },
    myAvg: function(msg) { return msg.myTotal / msg.myCount }
  }
})

complexClient.send({ txt: 'Hi', myTotal: 1337, myCount: 23 })


const Controller = require('./controllers');

sequelize.sync().then((result)=>{
    console.log('result')
    console.log("here")
    server.addService(package.Todo.service,{
    "CreateToDo":Controller.Todo.createTodo,
    "CreateUser":Controller.User.createUser,
    "UpdateUser":Controller.User.updateUser,
    "GetUsers":Controller.User.getUserList,
    "GetUser":Controller.User.getUser
    });
    server.start()
});


