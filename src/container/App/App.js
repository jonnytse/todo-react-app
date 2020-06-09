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
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">The Todo's List</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
