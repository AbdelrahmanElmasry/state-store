import { createStore, combineReducers, applyMiddleware } from 'redux'
import { appReducer } from './src/app-reducer';
import { ADD_GOAL, REMOVE_GOAL } from './src/goals/goal-reducer';
import { ADD_TODO,TOGGLE_TODO,REMOVE_TODO } from './src/todos/todoReducer';
import { generateId,createRemoveButton } from './src/utils'
import {todos} from './src/todos/todoReducer'
import {goals} from './src/goals/goal-reducer'
import {logger,checker} from './src/middlewares'

const store = createStore(combineReducers({
    todos,
    goals
}),applyMiddleware(checker,logger));


store.subscribe(()=>{
    const {goals,todos} = store.getState();

    document.getElementById('todos').innerHTML = ''
    document.getElementById('goals').innerHTML = ''   
    todos.forEach(addTodoToDom);
    goals.forEach(addGoalToDom)
    console.log('the new state is : ',store.getState())
})

const unsubscribe = store.subscribe(() => {
    console.log('state has been changed !');
    
});

// stop listening
unsubscribe();

// Actions creator
const addTodoAction = (todo) => {
    return ({
        type:ADD_TODO,
        todo
    })
}
const toggleTodoAction = (id) => {
    return ({
        type:TOGGLE_TODO,
        id
    })
}
const removeTodoAction = (id) => {
    return ({
        type:REMOVE_TODO,
        id
    })
}

const addGoalAction = (goal) => {
    return ({
        type:ADD_GOAL,
        goal
    })
}
const removeGoalAction = (id) => {
    return ({
        type:REMOVE_GOAL,
        id
    })
}

/**
 * extract input from UI and dispatch an action to create new todo
 */
function addTodo () {
    const input = document.getElementById('todoName')
    const name = input.value
    //valiate
    if(!name || name.trim() === "") return;
    input.value = ''
  
    store.dispatch(addTodoAction({
      name,
      complete: false,
      id: generateId()
    }));
  }
/**
 * extract input from UI and dispatch an action to create new goal
 */
function addGoal(){
    const input = document.getElementById('goalName')
    const name = input.value
    //valiate
    if(!name || name.trim() === "") return;
    input.value = ''

    store.dispatch(addGoalAction({
        name,
        complete:false,
        id: generateId()
    }))
}


/**
 * create html element and append into DOM tree with event listner
 */
function addTodoToDom(todo){
    const node= document.createElement('li')
    const text = document.createTextNode(todo.name)
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeTodoAction(todo.id));
    });
    node.appendChild(text)
    node.appendChild(removeBtn)
    node.style.textDecoration = todo.completed ? 'line-through' : 'none';
    node.style.cursor = 'pointer'
    node.addEventListener('click' , () => {
        store.dispatch(toggleTodoAction(todo.id));
    });

    document.getElementById('todos').appendChild(node)
}

function addGoalToDom(goal){
    const node= document.createElement('li')
    const text = document.createTextNode(goal.name)
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeGoalAction(goal.id));
    });
    node.appendChild(text)
    node.appendChild(removeBtn)

    document.getElementById('goals').appendChild(node)
}

document.getElementById('todoBtn').addEventListener('click', addTodo)
document.getElementById('goalBtn').addEventListener('click', addGoal)

