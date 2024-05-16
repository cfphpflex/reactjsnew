import React, { useState, useReducer, useContext } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const initialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}

export const TodoContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text: todo, completed: false },
    });
    setTodo('');
  };

  return (
      <TodoContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <h1>Todo List</h1>
          <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add Todo</button>
          <TodoList />
        </div>
      </TodoContext.Provider>
  );
}

export default App;
