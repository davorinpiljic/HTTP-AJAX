import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Friends from './Friends'
import Friend from './Friend'
import UpdateForm from './UpdateForm'

import InfoForm from './InfoForm'
import Nav from './Nav'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeItem: null,
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

addFriend = friend => {
  axios
    .post("http://localhost:5000/friends", friend
    )
    .then(response=>
      {this.setState({friends: response.data})
      this.props.history.push("/friends")
      console.log(response.data)
    })
    .catch(error => console.log(error))
}

updateFriend = friend => {
  axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      this.setState({
        activeItem: null,
        friends: res.data
      })
      this.props.history.push("/friends")

    })
    .catch(error => console.log(error))
}

deleteFriend = friend => {
  axios
    .delete(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      this.setState({
        activeItem: null,
        friends: res.data
      })
      this.props.history.push("/")
      this.props.history.push("/friends")
    })
    .catch(error => console.log(error))
}

setUpdateForm = (friend) => {
  this.setState({    activeItem: friend
  })
  console.log(friend)
  this.props.history.push("/updatefriend")
}

render() {
  return (
    <div className="App container">
        <Nav />
        <h1>Welcome to Friends App</h1>
      <div>
        <Route 
          exact path="/friends" 
          render={props => 
            <Friends {...props} 
              friends={this.state.friends} 
              setUpdateForm={this.setUpdateForm}
            activeItem={this.state.activeItem}
            deleteFriend={this.deleteFriend}

            />
          }
        />
        <Route
          exact path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
      
        <Route 
          exact path="/addfriend" 
          render={props => 
            <InfoForm {...props} 
            addFriend={this.addFriend}  
            // updateFriend={this.updateFriend}
            />
          }
        />
        <Route 
          exact path="/updatefriend" 
          render={props => 
            <UpdateForm {...props} 
            updateFriend={this.updateFriend}  
            activeItem={this.state.activeItem}
            // updateFriend={this.updateFriend}
            />
          }
        />

      </div>
    </div>
  );
  }
}

export default App;
