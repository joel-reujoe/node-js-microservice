
const db = require('../../DAL/todos.dal');



function createTodo(call, callback) {
    const todo = call.request;
    console.log(todo)
    db.saveTodo(todo)
        .then(() => {
            callback(null, todo);
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = createTodo;