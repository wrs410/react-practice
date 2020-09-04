import React from 'react';

class Filter extends React.Component {

	render() {
		return <button onClick = {() => this.props.toggleTask(this.props.name)} type="button" className="btn btn-info mx-2" aria-pressed="true">
	          Toggle {this.props.name} Tasks
        </button>
	}
}


export default Filter;
