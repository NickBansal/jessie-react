import React, { useState } from "react";

import { AddList } from "./components/add-list/add-list";
import AddTaskButton from "./components/add-task-button/add-task-button";
import Header from "./components/header/header";

import "./App.css";

function App() {
  const [list, setList] = useState([
    {
      contentText: "Wash dishes",
      id: Date.now(),
      categoryOption: "house chore",
      completed: false
    }
  ]);

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleNewList = (newList) => {
    setList((l) => [newList, ...l]);
  };

  const [showEditInput, setShowEditInput] = useState(false);

  return (
    <div className="App">
      <Header />
      <AddTaskButton
        list={list}
        handleNewList={handleNewList}
        filterCategory={filterCategory}
        handleFilterCategory={handleFilterCategory}
        showEditInput={showEditInput}
        setShowEditInput={setShowEditInput}
        text={text}
        setText={setText}
        category={category}
        setCategory={setCategory}
        showInput={showInput}
        setShowInput={setShowInput}
      />
      <AddList
        lists={list}
        setList={setList}
        filterCategory={filterCategory}
        showEditInput={showEditInput}
        setShowEditInput={setShowEditInput}
        setText={setText}
        setCategory={setCategory}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    </div>
  );
}

export default App;
