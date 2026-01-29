function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "done" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
