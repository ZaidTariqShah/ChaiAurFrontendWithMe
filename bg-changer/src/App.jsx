import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* BUTTON CONTAINER */}
      <div
        className="
        absolute 
        bottom-10 
        left-1/2 
        -translate-x-1/2
        bg-white 
        px-6 
        py-4 
        rounded-full 
        shadow-lg 
        flex 
        gap-4
      "
      >
        <button
          className="px-4 py-2 rounded-full text-white bg-blue-500"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="px-4 py-2 rounded-full text-white bg-purple-500"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

        <button
          className="px-4 py-2 rounded-full text-white bg-violet-500"
          onClick={() => setColor("violet")}
        >
          Violet
        </button>

        <button
          className="px-4 py-2 rounded-full text-white bg-red-500"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-4 py-2 rounded-full text-white bg-gray-500"
          onClick={() => setColor("grey")}
        >
          Grey
        </button>
      </div>
    </div>
  );
};

export default App;
