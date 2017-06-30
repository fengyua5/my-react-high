import React, { Component } from 'react';

export default function(ComposeComponent) {
    return class Decorator extends Component {
        constructor(...args) {
            super(...args);
            console.log('ats constructor');
        }
        componentWillMount() {
            console.log('ats componentWillMount');
        }
        componentDidMount(){
            console.log('ats componentDidMount');
        }

        componentWillUnmount(){
            console.log('ats componentWillUnmount');
        }

        componentWillReceiveProps(nextProps) {
            console.log('ats componentWillReceiveProps');
        }
        shouldComponentUpdate() {
            console.log('ats shouldComponentUpdate');
        }
        componentWillUpdate() {
            console.log('ats componentWillUpdate');
        }
        componentDidUpdate() {
            console.log('ats componentDidUpdate');
        }
        render() {
            console.log('ats render');
            return (
                <ComposeComponent
                    {...this.props}
                />
            );
        }
    }
}

