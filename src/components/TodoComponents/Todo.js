import React from 'react';

const Todo = props => {
    console.log(props)
    return(
        <div className={`task${props.task.completed ? ' completed' : ""}`}
        onClick={() => props.toggleItem(props.task.id)}> 
        {props.task.task}
        </div>
    )
}

export default Todo;