import React, {useState} from 'react';
import Todo from "./components/Todo.js";
import TaskForm from "./components/TaskForm.js";
import Filter from "./components/Filter.js";
import {nanoid} from "nanoid";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => 
    <Todo name = {task.name} 
    id = {task.id} 
    completed = {task.completed} 
    key = {task.id}
    toggleTaskCompleted = {toggleTaskCompleted}
    removeTask = {removeTask}
    editTaskName = {editTaskName}
    visible = {task.visible}>
    </Todo>);


  const filterNames = ["All", "Incomplete", "Complete"];
  const filterList = filterNames.map(filter => 
    <Filter key = {filter} name = {filter} toggleTask = {toggleTask}>
    </Filter>);

  function addTask(name) {
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false, visible:true};
    setTasks([...tasks, newTask]);
  }

  function removeTask(id) {
    const updated = tasks.filter(task => (id !== task.id));
    setTasks(updated);
  }

  //this function ensures that we're actually changing the value of completed 
  function toggleTaskCompleted(id) {
    const updated = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updated);
  }

  function editTaskName(id, newName) {
    const updated = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName};
      } else {
        return task;
      }
    });
    setTasks(updated);
  }

  function toggleTask(tasktype) {
      if (tasktype === "All") {
          const updated = tasks.map(task => {
            return {...task, visible: true};
          });
          setTasks(updated);
      } else if (tasktype === "Incomplete") {
          const updated = tasks.map(task => {
            if (task.completed === false) {
              return {...task, visible: !task.visible};
            }
            return task;
          });
          setTasks(updated);
      } else if (tasktype === "Complete") {
          const updated = tasks.map(task => {
            if (task.completed === true) {
              return {...task, visible: !task.visible};
            }
            return task;
          });
          setTasks(updated);       
      }
  }

  return (
    <div className="todo-app container">
      <h1>Basic Schedule App</h1>
      <TaskForm addTask = {addTask}></TaskForm>

      <div className="filters mb-3 ">
        {filterList}
      </div>

      <h4 id="list-heading">
        {`Total of ${taskList.length} ${taskList.length === 1 ? 'task' : 'tasks'} remaining, `}{`${tasks.filter(task => (task.completed === true)).length} completed`}
      </h4>

      <ul role="list" className="todo-list" aria-labelledby="list-heading">
        {taskList}
      </ul>

    </div>
  );

}

 

export default App;
