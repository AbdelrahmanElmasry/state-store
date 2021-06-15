import React , { Component } from 'react'
import List from './List'
import {addGoalAction, removeGoalAction} from '../../index'
import { generateId,createRemoveButton } from '../utils'

export default class Goals extends Component {
    addItem= (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.input = '';
        this.props.store.dispatch(addGoalAction({
            name,
            complete:false,
            id: generateId()
        }));
    }
    removeItem = (goal)=>{
        this.props.store.dispatch(removeGoalAction(goal.id))
    }
    render(){
        return (
            <div>
                <h1>Goals - List</h1>
                <input
                    type="text"
                    placeholder="Add Goal"
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Goal</button>
                <List 
                    items={this.props.goals}
                    removeItem={this.removeItem}
                />
            </div>
        )
    }
}