import { useState } from "react";
import { Greeting } from "./Components/DisplayGreeting1";
import { Product } from "./Components/Product2";
import { UserProfile } from "./Components/UserProfile3";
import { Gadgets } from "./Components/Gadgets4";
import { products } from "./Data/Products4";
import { Phones } from "./Components/Phone5";
import { products5 } from "./Data/Products5";
import { Article } from "./Components/Article6";
import { About } from "./Components/About7";
import { MyGadgets } from "./Components/MyGadgets8";
import { products8 } from "./Data/Products8";
import { ColorPicker } from "./Components/ColorPicker9";
import { Todo } from "./Components/Todo10";
import { todoItems } from "./Data/TodoItemList10";

function App() {
  const [count, setCount] = useState(0);
  const userData = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";
  const heading = "About Me";
  const name = "Jayant"; // you can put your name
  const learning = "I am learning ReactJS and soon will get a High Paying JOB!";
  const colorOptions = [
    { name: "red", hex: "#FF0000" },
    { name: "blue", hex: "#0000FF" },
    { name: "green", hex: "#008000" },
  ];

  return (
    <>
      <Todo todoItems={todoItems} />
      {/* <ColorPicker colors={colorOptions} /> */}
      {/* <ColorPicker red={'#EE4B2B'} blue={'#89CFF0'} green={'#7FFFD4'} /> */}
      {/* <MyGadgets arrOfProduct={products8} /> */}
      {/* <About heading={heading} name={name} learning={learning} /> */}
      {/* <Article title={title} content={content} /> */}
      {/* <Phones arr={products5} /> */}
      {/* <Gadgets productArray={products} /> */}
      {/* <UserProfile userData={userData} /> */}
      {/* <Greeting name={"Jayant"} /> */}
      {/* <Product name={"Macbook Air M3"} price={"Rs.1,00,000"} /> */}
    </>
  );
}

export default App;
