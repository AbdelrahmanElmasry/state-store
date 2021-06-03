export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function todos(state = [] ,action){   
     
    switch (action.type){
    case ADD_TODO:
        return state.concat([action.todo]);
    case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
        return state.map(todo => {
            return todo.id !== action.id ? todo : Object.assign({},todo,{completed:!todo.completed})
        });
    default:
        return state;
    }
}