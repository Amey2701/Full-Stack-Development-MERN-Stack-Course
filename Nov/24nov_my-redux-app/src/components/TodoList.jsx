import { useSelector } from "react-redux";
import CreateTask from "./CreateTask";

const TodoList = () => {
  const list = useSelector(state => state.todolist.todos);

  return (
    <div className="card todo-card">
      <h2>Todo List</h2>

      <CreateTask />

      <ul className="todo-list">
        {list.map(item => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
