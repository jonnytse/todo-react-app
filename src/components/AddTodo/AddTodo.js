import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (event) => {
        this.setState({ 
            content: event.target.value 
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state)
        console.log(this.state)
        console.log(this.state.content)
        this.setState ({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new todo:</label>
                    <input type="type" onChange={this.handleChange} placeholder={'Type here'} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;