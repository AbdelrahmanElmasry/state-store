import { createStore } from './store'
import { appReducer } from './app-reducer';
import { ADD_GOAL } from './goals/goal-reducer';
import { ADD_TODO } from './todos/todoReducer';

const store = createStore(appReducer);

store.subscribe(()=>{
    console.log('the new state is : ',store.getState())
})

const unsubscribe = store.subscribe(() => {
    console.log('state has been changed !');
    
});

// stop listening
unsubscribe();

// Actions creator
const addNewTodo = (todo) => {
    return ({
        type:ADD_TODO,
        todo
    })
}
const addNewGoal = (goal) => {
    return ({
        type:ADD_GOAL,
        goal
    })
}

store.dispatch(addNewTodo({id:new Date().getTime(),name:'Redux'}));
store.dispatch(addNewGoal({id:new Date().getTime(),name:'Frontend'}));

