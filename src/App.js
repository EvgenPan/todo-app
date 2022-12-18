import './App.css';
import TodoForm from "./components/form/todoForm";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Todo from "./components/Todo";
import {addCreator,deleteCreator} from "./store/todoReducer";

function App() {
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch();
    const createTodo = (newTodo) => {
        dispatch(addCreator(newTodo))
    }
  return (
    <div className="App container">
      <h1>TO-DO LIST</h1>
        <TodoForm createTodo={createTodo} />
        <div className="wrapper_columns">
            <div className="todo_column column">
                <h2>TODO</h2>
                <div className="task">
                    {todos.map(todo => {
                        return (<Todo
                        todo = {todo}
                        removeTodo={() => dispatch(deleteCreator(todo))}
                        />)
                    })}
                </div>
            </div>
            <div className="done_column column">
                <h2>DONE TODO</h2>
            </div>
        </div>
    </div>
  );
}

export default App;
