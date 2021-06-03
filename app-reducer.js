import { todos } from "./todos/todoReducer";
import { goals } from "./goals/goal-reducer";

export function appReducer(state = {todos:[],goals:[]},action){    
    return ({
        todos:todos(state.todos,action),
        goals:goals(state.goals,action),
    })
}