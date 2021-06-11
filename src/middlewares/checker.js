import {ADD_TODO} from '../todos/todoReducer'
import {ADD_GOAL}from '../goals/goal-reducer'
/**
 * Middleware - check the action to some rules before dispatch
 * @param  store - redux store 
 * @param  action - action 
 */
export const checker = (store) => (next) => (action) => {
    if(action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')){
        return alert('it\'s a bad idea');
    }

    if(action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')){
        return alert('it\'s a bad idea');
    }
    
    return next(action);
}