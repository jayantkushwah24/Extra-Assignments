import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../Data/Fakefetch";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/todos")
      .then(({ status, data }) => {
        if (status === 200) {
          setTodos(data.todos);
        } else {
          setError("Failed to fetch");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const handleAddToDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  const getDoneTodos = () => todos.filter((todo) => todo.isCompleted);

  const getOpenTodos = () => todos.filter((todo) => !todo.isCompleted);

  return (
    <TodoContext.Provider
      value={{ todos, handleAddToDone, getDoneTodos, getOpenTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
