
const saveTodo = (data) => new Promise((async(resolve, reject) => {
    try {
        const todo = new Todo(data);
        console.log(todo)
        const newTodo = await todo.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
        })
        // console.log(newTodo)
        resolve(newTodo);
    } catch (e) {
        reject(e);
    }
}));


module.exports = {
    saveTodo
    // getAllTodos,
    // getTodo,
    // deleteTodo,
    // updateTodo
};