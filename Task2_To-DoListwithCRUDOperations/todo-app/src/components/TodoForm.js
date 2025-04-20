import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➕</button>
    </form>
  );
}

export default TodoForm;
