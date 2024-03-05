import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './Todo_form';
import './style.css';

function App(props) {
  const [todos, setTodos] = useState(["eat", "sleep", "repeat"]);
  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos}/>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul 
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {
          todos.map((item, index)=>{
            return  <TodoItem key={index} todo={item} index={index} setTodos={setTodos}></TodoItem>
          })
        }
      </ul>
    </div>
  );
}

export default App;