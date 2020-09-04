import React, {useState} from 'react';



function TaskForm(props) {
//creates a field for name in state and a function that allows you to change the name in state 
const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    //clear the name field 
    setName('');
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit = {handleSubmit} className = "mb-3">
        <label htmlFor="new-todo-input">Enter a New Task (Name/Time)</label>
        <input onChange = {handleChange} className = "ml-2" type="text" id="new-todo-input" name="text" autoComplete="off" value = {name}/>
        <button className = "btn-lg btn-primary ml-2" type="submit">Add Task</button>
      </form>
  )
}

export default TaskForm;
