import React, {useState} from 'react';


function Todo(props) {

	const [isEditing, setEditing] = useState(false);

	const [editedName, setEditedName] = useState();

	function submitHandler(e) {
		e.preventDefault();
		props.editTaskName(props.id, editedName);
		setEditedName("");
		setEditing(false);
	}

	function handleChange(e) {
	  setEditedName(e.target.value);
	}

	const viewVersion = (
		<div>
		      <div className="c-cb">
		        <input onChange = {() => props.toggleTaskCompleted(props.id)} className = "mr-2" id={props.id} type="checkbox" defaultChecked={props.completed} />
		        <label className="todo-label lead" htmlFor={props.id}>
		          <strong>Name: </strong>{props.name.split('/')[0] + ' '}
		          <strong>Time: </strong>{props.name.split('/')[1]}
		        </label>
		      </div>
		      <div>
		        <button onClick = {() => setEditing(true)} type="button" className="btn btn-warning mr-3">
		          Edit <span>{props.name.split('/')[0]}</span>
		        </button>
		        <button onClick = {() => props.removeTask(props.id)} type="button" className="btn btn-warning">
		          Remove <span>{props.name.split('/')[0]}</span>
		        </button>
		      </div>
	      </div>
	);

	const editVersion = (
	  <form onSubmit = {submitHandler}>
	    <div className="form-group">
	      <label className="mr-3" htmlFor={props.id}>
	        New name for {props.name.split('/')[0]} (Format: Name/Time):
	      </label>
	      <input id={props.id} type="text" value = {editedName} onChange = {handleChange}/>
	    </div>
	    <div className="mb-3">
	      <button onClick = {() => setEditing(false)} type="button" className="btn btn-warning mr-3">
	        Cancel
	        <span> renaming {props.name.split('/')[0]}</span>
	      </button>
	      <button type="submit" className="btn btn-warning mr-3">
	        Save
	        <span> new name for {props.name.split('/')[0]}</span>
	      </button>
	    </div>
	  </form>
	);

	return <li className="todo mb-2">
	{props.visible ? (isEditing ? editVersion : viewVersion): <span></span>}
    </li>
}
 


export default Todo;
