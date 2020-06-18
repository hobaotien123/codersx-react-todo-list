import React from 'react';
import './App.css';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js'
function App() {
  return (
    <div>
      <Header/>
      <LoginForm title="Sign in" email="abc@example.com"/>
    </div>
  );
}

export default App;
