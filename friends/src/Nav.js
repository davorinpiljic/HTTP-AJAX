import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './App.css';


class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: []
        }
    }

    render() {
        return (
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <ul class="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </ul>
                    <ul class="nav-item">
                        <NavLink to="/friends" >Friends</NavLink>
                    </ul>
                    <ul class="nav-item">
                        <NavLink to="/addfriend" >Add Friend</NavLink>
                    </ul>
                    <ul class="nav-item">
                        <NavLink to="/updatefriend" >Update Friend</NavLink>  
                    </ul>
                </nav>               
            </div>
        )
    }
}
export default Nav