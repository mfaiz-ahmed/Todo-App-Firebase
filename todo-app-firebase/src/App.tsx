import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoScreen from './Components/TodoScreen';
import TodoList from './Components/TodoList';




function App() {
  return (
    <>
    <TodoScreen/>
    <TodoList/>
    </>
  );
}

export default App;
