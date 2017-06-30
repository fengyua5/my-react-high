
import React, { Component } from 'react';
import ChangeHOC from '../hoc/changeHOC';


const Input = (props) => {
	return (
		<input
			value={props.value}
			onChange={props.onChange}
		/>
	);
};

export default ChangeHOC(Input);
