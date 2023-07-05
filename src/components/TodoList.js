import * as React from "react";
import List from "@mui/material/List";
import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

const initialToDoItems = [
  {
    id: 1,
    text: "Walk to dog",
    completed: false,
  },
  {
    id: 2,
    text: "Do the laundry",
    completed: false,
  },
  {
    id: 3,
    text: "Get groceries",
    completed: true,
  },
  {
    id: 4,
    text: "Cook for the week",
    completed: false,
  },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(initialToDoItems);
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: 8, completed: false }];
    });
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggle={() => toggleTodo(todo.id)}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
};
