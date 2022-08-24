import "./App.css";
import Forms from "./components/Forms";
import TaskList from "./components/TaskList";
import React, { useState } from "react";

const App= () => {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [edit, setedit] = useState(null);

  return (
    <div className="App">
      <Forms
        input={input}
        setInput={setInput}
        taskList={taskList}
        setTaskList={setTaskList}
        edit={edit}
        setedit={setedit}
      />
      <TaskList
        input={input}
        setInput={setInput}
        taskList={taskList}
        setTaskList={setTaskList}
        edit={edit}
        setedit={setedit}
      />
    </div>
  );
}

export default App;
