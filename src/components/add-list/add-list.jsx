import React from "react";

import "./add-list.css";

export function AddList({
  lists,
  filterCategory,
  setList,
  setText,
  setCategory,
  showInput,
  setShowInput
}) {
  const removeList = (id) => {
    setList(lists.filter((l) => l.id !== id));
  };

  const completedList = (id) => {
    setList(
      lists.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  };

  const getEditTask = (id) => {
    const editTask = lists.find((i) => {
      return i.id === id;
    });

    if (editTask) {
      if (!showInput) {
        setShowInput(!showInput);
      }
      setText(editTask.contentText);
      setCategory(editTask.categoryOption);
      console.log(editTask);
    }
  };

  return (
    <ul>
      {lists
        .filter((list) => {
          return filterCategory === ""
            ? list
            : list.categoryOption === filterCategory;
        })
        .map((list) => {
          return (
            <li key={list.id}>
              <input
                type="checkbox"
                checked={list.completed}
                onClick={() => completedList(list.id)}
              />
              <p>
                {list.contentText} ------ {list.categoryOption}
              </p>
              <button type="button" onClick={() => removeList(list.id)}>
                Remove
              </button>
              <button type="button" onClick={() => getEditTask(list.id)}>
                Edit
              </button>
            </li>
          );
        })}
    </ul>
  );
}
