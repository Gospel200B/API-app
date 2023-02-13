const data = require('./data');

class controller {
    async getAllTodos() {
        return await Todos.find({}, _v)
    }

    async addTodos(Todos) {
        return await Todos.create(Todos)
    }

    async getTodosById(Id) {
        return await Todos.findOne({_Id: Id})
    }

    async editTododsById(Id, data) {
        return await Todos.findOneAndUpdate({_Id: Id}, data)
    }

    async deleteTodosById(Id) {
        return await Todos.findOneAndDelete({_Id: Id})
    }
} 
//export an instantiated object of the controller

module.exports = new controller()