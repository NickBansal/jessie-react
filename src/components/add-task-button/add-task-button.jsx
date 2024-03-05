import React, { useState } from "react";

import "./add-task-button.css";

function AddTaskButton({
  handleNewList,
  list,
  handleFilterCategory,
  filterCategory,
  text,
  setText,
  setCategory,
  category,
  showInput,
  setShowInput
}) {
  const [showCategory, setShowCategory] = useState(false);
  const [error, setError] = useState(false);

  const toggleShowInput = () => {
    setShowInput(!showInput);
  };

  const toggleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleNewText = (e) => {
    setText(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const addNewTextToList = () => {
    const newList = {
      contentText: text,
      id: Date.now(),
      categoryOption: category,
      completed: false
    };
    console.log(newList);

    if (text && category !== "") {
      if (list.some((i) => text === i.contentText)) {
        setError("* please dont input duplication information");
        setText("");
      } else {
        handleNewList(newList);
        setError("");
        setText("");
      }
    } else {
      setError("* please fill in all the fields");
    }
  };
  console.log(error);
  return (
    <div className="add-button">
      <button
        type="button"
        onClick={() => {
          toggleShowInput();
        }}>
        {showInput ? "Hide Input" : "Show Input"}
      </button>
      {showInput ? (
        <>
          <input
            type="text"
            value={text}
            onChange={handleNewText}
            placeholder="Please input something here"
          />

          <select value={category} name="category" onChange={handleCategory}>
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="house chore">house chore</option>
            <option value="hobbies">hobbies</option>
            <option value="work related">work related</option>
          </select>

          <button type="button" onClick={() => addNewTextToList()}>
            Add item
          </button>
        </>
      ) : null}
      <button type="button" onClick={() => toggleShowCategory()}>
        filter by category
      </button>
      {showCategory ? (
        <select
          value={filterCategory}
          onChange={(e) => handleFilterCategory(e)}>
          <option value="">show all</option>
          <option value="house chore">house chore</option>
          <option value="hobbies">hobbies</option>
          <option value="work related">work related</option>
        </select>
      ) : null}

      {error ? <h2> {error}</h2> : null}
    </div>
  );
}

export default AddTaskButton;
