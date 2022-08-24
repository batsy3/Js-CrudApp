import React from "react";
import checkimage from '../assets/icons/check.png'
const TaskList = ({
  input,
  setInput,
  taskList,
  setTaskList,
  edit,
  setedit,
}) => {
  const deleteTask = ({ id }) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const editTask = ({ id }) => {
    const itemToEdit = taskList.find((task) => task.id === id);
    setedit(itemToEdit);
  };
  const completeTask = (task) => {
    setTaskList(
      taskList.map((item) => {
        if (task.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <h1>Todo List</h1>

      {taskList.map((task) => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <di>
              {task.completed ? <img src={ checkimage} alt='check icon'/> : null}
            </di>
            <button onClick={() => deleteTask(task)}>delete</button>
            <button onClick={() => editTask(task)}>edit</button>
            <button onClick={() => completeTask(task)}>done</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
