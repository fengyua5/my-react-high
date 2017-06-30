

import React, { Component } from 'react';

export default function(ComposeComponent) {
	return class changeHOC extends Component {
		constructor(...args) {
			super(...args);
			this.state = {
				value: this.props.defaultValue
			};
			this.onChange = this.onChange.bind(this);
		}

		onChange(e){
			this.setState({
				value: e.target.value
			})
		}
		render() {
			return (
				<ComposeComponent
					{...this.props}
					onChange={this.onChange}
				/>
			);
		}
	}
}
