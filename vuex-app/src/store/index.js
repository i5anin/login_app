import { createStore } from "vuex";

import CounterModule from "./modules/counter.module.js";
import TodosModule from "./modules/todos.module.js";

export default createStore({
  modules: {
    CounterModule,
    TodosModule,
  },
});
