import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todoText: ''
        }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitItem = event => {
        this.setState({ todoText:'' });
        this.props.addItem(event. this.state.todoText)
    };

    render(){
        console.log(this.state)
        return(
        <form onSubmit={this.submitItem}>
            <input 
                name='todoText'
                type="text"
                value={this.state.todoText}
                placeholder="...todo"
                onChange={this.handleChanges}
                
            />
            <button >Add Todo</button>
            <button >Clear Completed</button>
        </form>
        )
    }
}

export default TodoForm;