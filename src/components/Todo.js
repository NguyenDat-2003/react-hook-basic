function Todo({ todos, title }) {
  return (
    <div className="todos-container">
      <div className="title">{title}</div>

      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </div>
  );
}

export default Todo;
