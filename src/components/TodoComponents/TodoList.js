import React from 'react';
import Todo from './Todo';

const Organize = {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
};

const Bake = {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
}

function TodoList(){
    return(
        <div className='TodoList'>
        <Todo tasks={Organize} />
        <Todo tasks={Bake} />
        </div>
    )
}


export default TodoList;