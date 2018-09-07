//3. Create  UserInput component

import React from 'react';

const userInput = (props) => {

	const style = {
		border: '2px solid black'
	};


	return <input 
	type="text"
	style = {style}
	onChange = {props.changed}
	value={props.currentName} />;

};

export default userInput;