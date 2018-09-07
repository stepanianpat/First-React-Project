// 1. Create UserOutput compoennt

import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p> Username: {props.userName} </p>
			<p>Ferrari F40</p>
		</div>
	);
};

export default userOutput;