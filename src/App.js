import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';
import RecommendedFriends from './components/RecommendedFriends.js';
import Table from './components/Table.js';
import Input from './components/Input.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LoginForm title="Sign in" email="abc@example.com"/>
        <RecommendedFriends/>
        <Table/>
        <Input/>
      </div>
    );
  }
}

export default App;
