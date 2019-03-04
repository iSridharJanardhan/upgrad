import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css';
import AddContact from './components/addcontact'
import ContactList from './components/contactlist'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route path ="/addContact" component={AddContact} />
        <Route path= "/" exact component = {ContactList} />
      </div>
      </Router>
    );
  }
}

export default App;
