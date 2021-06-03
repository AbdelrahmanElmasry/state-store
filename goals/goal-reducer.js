
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export function goals(state = [] ,action){
    switch (action.type){
    case ADD_GOAL:
        return  state.concat([action.goal]);
    case REMOVE_GOAL:
        return state.filter(goal => goal.id !== action.id);
    default:
        return state;
    }
}