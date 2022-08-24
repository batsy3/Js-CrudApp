import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
const Forms = ({ input, setInput, taskList, setTaskList, edit, setedit }) => {
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTaskList([
        ...taskList,
        { id: uuid(), title: input, completed: false },
      ]);
    } else {
      handleEdit({ id: edit.id, title: input, completed: false });
    }
    setInput("");
  };
  const handlechange = (e) => {
    setInput(e.target.value);
  };
  const handleEdit = ({ id, title, completed }) => {
    const newList = taskList.map((item) =>
      item.id === id ? { id, title, completed } : item
    );
    setTaskList(newList);
    setedit(null);
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [edit, setInput]);
  return (
    <div>
      <div>
        <form>
          <h1>Todo</h1>
          <input
            placeholder="enter task"
            onChange={handlechange}
            value={input}
          />
          <button type="submit" onClick={handlesubmit}>
            {edit ? "Save" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
