import React , { Component } from 'react'
import List from './List'
import {addTodoAction,removeTodoAction,toggleTodoAction} from '../../index'
import { generateId,createRemoveButton } from '../utils'

export default class Todos extends Component {
    addItem = (e)=>{
        e.preventDefault();
        const name = this.input.value;
        this.input.value = '';
        this.props.store.dispatch(addTodoAction({
            name,
            complete:false,
            id: generateId()
        }));
    }
    removeItem = (todo)=>{
        this.props.store.dispatch(removeTodoAction(todo.id))
    }
    toggleItem = (id)=>{
        this.props.store.dispatch(toggleTodoAction(id))
    }
    render(){
        return (
            <div>
                <h1>Todo - List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>

                <List 
                    items={this.props.todos}
                    toggleItem={this.toggleItem}
                    removeItem={this.removeItem}
                />
            </div>
        )
    }
}