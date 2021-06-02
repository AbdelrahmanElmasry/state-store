export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function todos(state = [] ,action){    
    switch (action.type){
    case ADD_TODO:
        return state.todos = state.todos.concat([action.todo]);
    case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.todo.id);
    case TOGGLE_TODO:
        return state.map(todo => {
            todo.id !== action.todo.id ? todo : Object.assign({},todo,{completed:!todo.completed})
        });
    default:
        return state.todos;
    }
}