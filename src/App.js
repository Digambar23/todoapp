import { useState } from "react";
import "./App.css";
import { ToDoInput } from "./ToDoInput";
import { TodoList } from "./TodoList";

const App=()=> {
  const[todos,setTodos]=useState([]);
  const[todo,setTodo]=useState([]);
  const addTodo=()=>{
    if (todo !==""){
      setTodos([...todos,todo]);
      setTodo("");
    }
  };
const deleteTodo=(text)=>{
  const newTodos = todos.filter((todo)=>{
    return todo !==text;
  });
  setTodos(newTodos);
};
  return (
    <div className="App">
      <h1>React ToDo App</h1>
      {/* <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>Add</button> */}
{/*      
  );
}

export default App;
  {todos?.length>0?( <ul className="todo-list">
          {todos.map((todo,index)=>(
            <div className="todo">
              <li key={index}>{todo}</li>
              <button className="delete-button" onClick={()=>{
                deleteTodo(todo);
              }}>Delete</button>

            </div>
            ))}
        </ul>):(
          <div className="empty">
            <p>No task found</p>
            </div>
        )}

      </div> */}
      <ToDoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList list={todos} remove={deleteTodo}/>
    </div>
  );
    };
    export default App;