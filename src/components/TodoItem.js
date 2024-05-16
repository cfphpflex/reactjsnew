import React, { useContext } from 'react';
import { TodoContext } from '../App';

function TodoItem({ todo }) {
    const { dispatch } = useContext(TodoContext);

    const deleteTodo = () => {
        dispatch({ type: 'DELETE_TODO', payload: todo.id });
    };

    const toggleTodo = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };

    return (
        <div>
      <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={toggleTodo}
      >
        {todo.text}
      </span>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default TodoItem;
