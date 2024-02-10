export default {
    state()
    {
        return {
            Todos: []
        }
    },
    actions: {
        addTodo({state}, payload) {
            state.Todos.push(payload)
        }
    }
}