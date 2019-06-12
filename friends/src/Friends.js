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



    render() {
        return (
            <div>
                <h1>{this.state.friends.map(friend => {
                    return friend.name
                })}</h1>
            </div>
        )
    }
}
export default Friends