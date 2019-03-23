import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import StudentList from './components/StudentList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
        <StudentList/>
      </div>
    );
  }
}

export default App;
