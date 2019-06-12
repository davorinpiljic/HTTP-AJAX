import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class InfoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

        //     .get("http://localhost:5000/friends")
        //     .then(response => this.setState( {friends: response.data}))
        //     .catch(error => {
        //         alert('no data')
        //     })


    render() {
        return (
            <div>
                <form>

                    <input type="text" 
                            placeholder="name" 
                            onChange={this.props.inputHandle}
                            value={this.state.name} 
                            name="name"
                    >
                    </input>
                    <input type="text" 
                            placeholder="age" 
                            onChange={this.props.inputHandle}
                            value={this.state.age} 
                            name="age"
                    >
                    </input>
                    <input type="text" 
                            placeholder="email" 
                            onChange={this.props.inputHandle}
                            value={this.state.email} 
                            name="email"
                    >
                    </input>
                </form>
                <button onClick={this.props.addFriend}>Save Friend</button>

            </div>
        )
    }
}
export default InfoForm