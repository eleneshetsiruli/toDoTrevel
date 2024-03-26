import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
import { itemInter } from "./components/interfaces/types";

const initialItems: itemInter[] = [];

function App() {
  const [list, setList] = useState(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form list={list} setList={setList} />
      <PackingList list={list} setList={setList} />
      <Stats />
    </div>
  );
}

export default App;
