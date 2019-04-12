import React from 'react';

const Todo = props =>{
    return(
        <div className='todo'> 
                {props.tasks.task}
        </div>
    )
}

export default Todo;