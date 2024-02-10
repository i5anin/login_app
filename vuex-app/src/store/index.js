import { createStore } from "vuex";

import CounterModule from "./modules/counter.module.js";
import TodosModule from "./modules/todos.module.js";


// export default createStore({
//     state()
//     {
//         return {
//             counter: 1,
//             Todos: []
//         }
//     },
//     mutations: {
//         plus(state)
//         {
//             state.counter++
//         },
//         minus(state)
//         {
//             state.counter--
//         }
//     },
//     actions: {
//         addTodo({ state }, payload)
//         {
//             state.Todos.push(payload)
//         }
//     }
// })

export default createStore({
    state()
    {
        return {
            title: 'my some title'
        }
    },
    modules: {
        CounterModule,
        TodosModule
    }
})