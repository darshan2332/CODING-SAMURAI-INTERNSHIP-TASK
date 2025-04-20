import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            marginLeft: '8px',
          }}
        >
          {todo.text}
        </span>
      )}

      <button onClick={handleEdit} style={{ marginLeft: '10px' }}>
        {isEditing ? '✅' : '✏️'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
