import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: props.friends
        }
    }

    updateFriend = (event, friend) => {
        event.preventDefault()
        this.props.setUpdateForm(friend)
    }
    deleteFriend = (event, friend) => {
        event.preventDefault()
        this.props.deleteFriend(friend)
        this.props.history.push("/friends")
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.friends.map(friend => {
                    return(<div> <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                      <h1 class="display-4">{friend.name}</h1>
                      <p class="lead">friend's e-mail is: {friend.email} and the friend's age is: {friend.age}</p>
                      <button type="button" class="btn btn-primary" onClick={event => this.updateFriend(event, friend)}>Update</button>
                    <button type="button" class="btn btn-danger" onClick={event => this.deleteFriend(event, friend)}>Delete</button>
                    </div>
                  </div>
                    </div>)
                })}</h1>
            </div>
        )
    }
}
export default Friends