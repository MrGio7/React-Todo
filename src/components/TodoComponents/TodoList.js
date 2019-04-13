import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props)
        return(
            <div className='todoList'>
                {props.taskList.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleItem={props.toggleItem}
        />
      ))}
            </div>
        )
}


export default TodoList;