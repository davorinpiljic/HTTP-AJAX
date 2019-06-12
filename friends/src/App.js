import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Friends from './Friends'
import InfoForm from './InfoForm'
import Nav from './Nav'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(response => this.setState( {friends: response.data}))
        .catch(error => {
            alert('no data')
        })
}

addFriend = event => {
  event.preventDefault()
 
  axios
    .post("http://localhost:5000/friends", {       
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email 
      }
    )
    .then(response=>
      {this.setState({friends: response.data})
      console.log(response.data)
    })

}

inputHandle = (event) => {
  this.setState({[event.target.name]: event.target.value})
  // console.log(this.state.name)
}

updateFriend = event => {
  event.prevetnDefault()

  axios
    .put("http://localhost:5000/friends")
}



  render() {
  return (
    <div className="App">
        <Nav />
        <h1>{this.state.friends.map(friend => {
          return friend.id
        })}</h1>
      <div>
        <Route exact path="/friends" render={props => <Friends {...props} friends={this.state.friends} updateFriend={this.updateFriend}/>}/>
        <Route exact path="/addfriend" render={props => <InfoForm {...props} addFriend={this.addFriend} inputHandle={this.inputHandle}/>}/>
      </div>
    </div>
  );
  }
}

export default App;
