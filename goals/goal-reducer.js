
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export function goals(state = [] ,action){
    switch (action.type){
    case ADD_GOAL:
        return state.goals = state.goals.concat([action.goal]);
    case REMOVE_GOAL:
        return state.goals.filter(goal => goal.id !== action.goal.id);
    default:
        return state.goals;
    }
}