import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/todoSlice";

const CreateTask = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!value.trim()) return;
    dispatch(addTask(value));
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className="todo-input">
      <input
        ref={inputRef}
        value={value}
        placeholder="Enter task..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default CreateTask;
