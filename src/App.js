import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Navbar from './Pokemon/Navbar';
import UserCreate from './Pokemon/UserCreate';
import PokeList from './Pokemon/PokeList';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  makeRequest = () => {
    axios
    .get("http://localhost:8080/pokeuser")
    .then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  componentDidMount = () => {
    this.makeRequest();
  }

  render(){
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" render={() => <UserCreate getAll={this.makeRequest}/>}/>
          <Route path="/PokeList" render={() => <PokeList data={this.state.data}/>}/>

        </Router>

        
        


      </div>
    );
  }
}

export default App;