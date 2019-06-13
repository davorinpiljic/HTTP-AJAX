import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: this.props.activeItem || {
                name: "",
                age: null,
                email: "",        
        
        }
    }
}
    inputHandle = event => {
        this.setState({
            friends: {
                ...this.state.friends, 
                [event.target.name]: event.target.value 
            }
        })
        console.log(this.state.friends.name)
      }

      updateFriend = event => {
          this.props.updateFriend(this.state.friends)
      }

    render() {
        return (
            <div>
                <form>
                <input type="text" 
                            placeholder="name" 
                            onChange={this.inputHandle}
                            value={this.state.friends.name}
                            name="name"
                    >
                    </input>
                    <input type="text" 
                            placeholder="name" 
                            onChange={this.inputHandle}
                            value={this.state.friends.name}
                            name="name"
                    >
                    </input>
                    <input type="text" 
                            placeholder="age" 
                            onChange={this.inputHandle}
                            value={this.state.age} 
                            name="age"
                    >
                    </input>
                    <input type="text" 
                            placeholder="email" 
                            onChange={this.inputHandle}
                            value={this.state.email} 
                            name="email"
                    >
                    </input>
                </form>
                <button onClick={this.updateFriend}>Update Friend</button>
                {/* <button onClick={this.updateFriend}>Update Friend</button> */}

            </div>
        )
    }
}
export default UpdateForm