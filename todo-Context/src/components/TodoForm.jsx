import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex items-center gap-2 w-full mt-4">
      <input
        type="text"
        placeholder="Write a new task..."
        className="flex-1 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 
        focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none
        text-gray-800 shadow-sm placeholder-gray-400 transition"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="px-5 py-2 rounded-xl bg-green-600 text-white font-medium shadow-sm
        hover:bg-green-700 active:scale-95 transition duration-150"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
