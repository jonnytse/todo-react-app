import React, { Component } from 'react';
import Todos from '../../components/Todos';
import AddTodo from '../../components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Practice coding'},
      {id: 2, content: 'Mow the lawn'},
      {id: 3, content: 'Walk the dog'}
    ]
  }
  deleteTodo = (id) => {
    const filterTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: filterTodos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let addedTodos = [...this.state.todos, todo]
    this.setState({
      todos: addedTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Jonathan's Todo's List</h1>
        <h5 className="center red-text">Click on a todo to remove it from the list!</h5>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
