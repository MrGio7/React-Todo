import React from 'react';

const Todo = props => {
    return(
        <div className='todo'> 
        {props.task.task}
        </div>
    )
}

export default Todo;