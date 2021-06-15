import React , { Component } from 'react'
import Todos from './Todos'
import Goals from './Goals'
export default class App extends Component {
    componentDidMount(){
        this.props.store.subscribe(()=> this.forceUpdate())
    }
    render(){
        const { store } = this.props;
        const { todos,goals } = store.getState();
        
        return (
            <div>
                State Management - App
                <Todos todos={todos} store={this.props.store}/>
                <Goals goals={goals} store={this.props.store}/>
            </div>
        )
    }
}