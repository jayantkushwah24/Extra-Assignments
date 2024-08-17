import { useState } from "react";
import "./App.css";
import { RenderHeroAndVillain } from "./Components/ShowHeroAndVillain1";
import { ChangeFontSize } from "./Components/IncreaseDecreaseFontSize2";
import { RenderItems } from "./Components/RenderItemsByCategory3";
import { TodoList } from "./Components/TodoList4";
import { todoItems } from "./Data/TodoListItems4";
import { TodoListMarkasdone } from "./Components/TodoList5";
import { todoItems5 } from "./Data/TodoItems5";
import { RenderBooks } from "./Components/RenderBooksByCategory6";
import { RenderLife } from "./Components/RenderRemainingLifes7";

function App() {
  return (
    <>
      {/* <RenderHeroAndVillain /> */}
      {/* <ChangeFontSize /> */}
      {/* <RenderItems /> */}
      {/* <TodoList todoItems={todoItems} /> */}
      {/* <TodoListMarkasdone todoItems={todoItems5} /> */}
      {/* <RenderBooks /> */}
      <RenderLife />
    </>
  );
}

export default App;
