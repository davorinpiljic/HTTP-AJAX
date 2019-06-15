import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Friend extends React.Component {
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
        return (<div>
            <h1>{this.state.friends.name}</h1>
            <button onClick={event => this.updateFriend(event, this.state.friends.id)}>Update</button>
                    <button onClick={event => this.deleteFriend(event, this.state.friends)}>Delete</button></div>
        )
    }
}
export default Friend