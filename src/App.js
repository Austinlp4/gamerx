import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { allGames } from './apiCalls';

class App extends React.Component{
  componentDidMount(){
    allGames();
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}

export default App;
