import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';
import RecommendedFriends from './components/RecommendedFriends.js';
import FollowFriendListItem from './components/FollowFriendListItem.js';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <LoginForm title="Sign in" email="abc@example.com"/>
        <RecommendedFriends/>
      </div>
    );
  }
}

export default App;
