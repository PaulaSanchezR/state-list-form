import React from 'react';
import logo from '../logo.svg';
import title from '../components/Title'

//functional componen is always statless
const header = () => {
    return (
        <header>
            <img src={logo} alt="react-log" className="App-log" />
            <h1>My first create-react-app</h1>
            <title message="my first create-react-app"/>
        </header>
    )
}
export default header;