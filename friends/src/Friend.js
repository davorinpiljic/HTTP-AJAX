import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Friend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: {}
        }
    }

componentDidMount() {
    axios
        .get(`/friends/${this.props.match.params.id}`)
        .then(response => {this.setState({friend: response.data})
        console.log(this.state.friend)})
        .catch(error => console.log(error))
}

deleteFriend = event => {
    event.preventDefault()
    this.props.deleteFriend(this.state.friend.id)
}

    render() {
        return (
            <h1>{this.state.friend.name}</h1>
        )
    }
}
export default Friend