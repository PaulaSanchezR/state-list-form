import React from 'react';
import logo from '../logo.svg';
import Title from '../components/Title'

//functional componen is always statless
const header = () => {
    return (
        <header>
            <img src={logo} alt="react-log" className="App-log" />
            <h1>My first create-react-app</h1>
            <Title message="my first create-react-app"/>
        </header>
    )
}
export default header;