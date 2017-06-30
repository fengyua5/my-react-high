import React, { Component } from 'react';
import HOC from './hoc';
class Example extends React.Component{
    constructor(props){
        super(props);
        console.log('example constructor');
    }
    componentWillMount() {
        console.log('example componentWillMount');
    }
    componentDidMount() {
        console.log('example componentDidMount');
    }
    componentWillReceiveProps() {
        console.log('example componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('example shouldComponentUpdate');
    }
    componentWillUpdate() {
        console.log('example componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('example componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('example componentWillUnmount');
    }
    render(){
        console.log('example render');
        return <div>example</div>;
    }
}

export default HOC(Example);