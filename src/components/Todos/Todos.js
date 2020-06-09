// *** VERSION 1 - stateless component showing how props is passed down from the App.js
//this is a functional component (stateless component) that receives props from App.js
//see Net Ninja react tutorial. chapter 15 stateless components for more information
//see lines 33-58 for the shortened version, and compare with lines 6-7
import React from 'react';

const Todos = (props) => {             
    const {todos} = props;               
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">The todo list is empty - congratulations!</p>
    ) 
    return (
        <div className="todos collection">  
            {todoList}
        </div>
        
    )
}

export default Todos;   


// // *** VERSION 2 - stateless component with props destructured directly
// //this is a functional (stateless component) that has 'todos props' destructured directly
// //see Net Ninja react tutorial, chapter 15 stateless components for more info
// import React from 'react';

// const Todos = ({todos}) => {             
//     const todoList = todos.length ? (
//         todos.map(todo => {
//             return (
//                 <div className="collection-item" key={todo.id}>
//                     <span>{todo.content}</span>
//                 </div>
//             )
//         })
//     ) : (
//         <p className="center">The todo list is empty - congratulations!</p>
//     ) 
//     return (
//         <div className="todos collection">  
//             {todoList}
//         </div>
//     )
// }

// export default Todos;   


// // *** VERSION 3 - class (container) component
// //this is the class versiobn of the Component. Class components require the render function and typically
// //houses states within, hence this can be alternatively written as a stateless component, as above
// //see Net Ninja react tutorial, chapter 15 stateless components for more info
// import React, { Component } from 'react';

// class Todos extends Component {
//     render() {
//         const {todos} = this.props;
//         const todoList = todos.length ? (
//             todos.map(todo => {
//             return (
//                 <div className="collection-item" key={todo.id}>
//                     <span>{todo.content}</span>
//                 </div>
//             )
//         })
//         ) : (
//             <p classNane="center">The todo list is empty - congrats!</p>
//         )    
//         return (
//             <div className="todos collection">
//                 {todoList}
//             </div>
//         )
//     }
// }

// export default Todos