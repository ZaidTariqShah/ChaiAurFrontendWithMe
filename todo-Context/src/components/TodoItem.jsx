import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-black/10 rounded-xl px-4 py-3 gap-x-4 shadow-sm backdrop-blur-sm duration-300
        ${
          todo.completed
            ? "bg-green-100/80 hover:bg-green-100"
            : "bg-purple-100/70 hover:bg-purple-100"
        }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-green-600"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Text Input */}
      <input
        type="text"
        className={`flex-1 text-lg font-medium bg-transparent outline-none duration-200
          ${
            isTodoEditable
              ? "border-b border-black/30 pb-0.5"
              : "border-b border-transparent"
          }
          ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}
        `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        className="inline-flex w-9 h-9 rounded-lg text-sm border border-black/10 justify-center items-center 
        bg-white hover:bg-gray-100 transition shadow-sm active:scale-95 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        className="inline-flex w-9 h-9 rounded-lg text-sm border border-black/10 justify-center items-center 
        bg-white hover:bg-red-100 text-red-600 transition shadow-sm active:scale-95"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
