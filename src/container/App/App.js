import React, { Component } from 'react';
import Todos from '../../components/Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Practice coding'},
      {id: 2, content: 'Mow the lawn'},
      {id: 3, content: 'Tidy up the house'}
    ]
  }
  deleteTodo = (id) => {
    const filterTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos: filterTodos})
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">The Todo's List</h1>
        <h5 className="center red-text">Click on a todo to remove it from the list!</h5>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
