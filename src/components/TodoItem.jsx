import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const edit = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const handleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-700 rounded-lg px-4 py-3 gap-x-4 shadow-md transition duration-300 ${
        todo.completed ? "bg-green-600" : "bg-gray-800"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-green-200 rounded focus:ring-2 focus:ring-green-300"
        checked={todo.completed}
        onChange={handleComplete}
      />
      <input
        type="text"
        className={`flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 focus:outline-none ${
          todo.completed ? "line-through text-black" : "text-white"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className={`w-9 h-9 flex justify-center items-center rounded-full transition-colors ${
          isTodoEditable
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-600 hover:bg-gray-700"
        }`}
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            edit();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="w-9 h-9 flex justify-center items-center rounded-full bg-red-200 hover:bg-red-400 transition-colors"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
