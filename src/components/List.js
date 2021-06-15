
import React , { Component } from 'react';

export default function List(props){
    return (
        <ul>
            {props.items.map(item => {
                return <li key={item.id}>
                            <span 
                                onClick={()=> props.toggleItem && props.toggleItem(item.id)}
                                style={{textDecoration:item.completed ? 'line-through' : 'none'}}
                            >{item.name}</span>
                            <button onClick={() => props.removeItem(item)}>X</button>
                        </li>
            })}
        </ul>
    )
}