import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Trail = () => {
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const output = await response.json();
        setData(output);
      } catch (error) {
        console.log("Error fetching todos:", error);
      }
    }

    fetchData();
  }, []);

  const handleCheckboxChange = (id) => {
    setData((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>The titile, id's and checkbox</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            ID: {todo.id}, Title: {todo.title}
            {/* {
                todo.completed ? <input type="checkbox" checked/> :  <input type="checkbox" />
            } */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trail;
