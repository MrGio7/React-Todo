import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (){
    super();


    this.state = {
      taskList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
    }
  }

  addArray = item =>{
    const copiedArray = this.state.taskList.slice();
    const newArray = {
      task: item,
      id: Date.now(),
      completed:false
    }
    copiedArray.push(newArray)

    
    this.setState({
      taskList: copiedArray
    });
  };
  
  toggleItem = itemId => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if(itemId === item.id) {
          return{
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = event => {
    this.setState({
      taskList: this.state.taskList.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div>
        <TodoList 
        taskList={this.state.taskList}
        toggleItem={this.toggleItem}
        />
        <TodoForm 
        addArray={this.addArray}
        />
        <button onClick={this.clearCompleted}>Clear Selected</button>
      </div>
    );
  }
}

export default App;
