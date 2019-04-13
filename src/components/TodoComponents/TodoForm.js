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
        event.preventDefault();
        this.setState({ todoText:'' });
        this.props.addArray(this.state.todoText)
    };

    render(){
        return(
        <form onSubmit={this.submitItem}>
            <input 
                name='todoText'
                type="text"
                value={this.state.todoText}
                placeholder="...todo"
                onChange={this.handleChanges}
                
            />
            <button >Add </button>
            <button >Clear Selected</button>
        </form>
        )
    }
}

export default TodoForm;