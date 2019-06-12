import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        // axios
        //     .get("http://localhost:5000/friends")
        //     .then(response => this.setState( {friends: response.data}))
        //     .catch(error => {
        //         alert('no data')
        //     })
    }

    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/friends" >Friends</NavLink>
                <NavLink to="/addfriend" >Add Friend</NavLink>
            </div>
        )
    }
}
export default Nav