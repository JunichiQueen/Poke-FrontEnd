import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(){
        super();
        this.state=({
            success: "",
            error: ""
        })
    }

    createUser = (e) => {
        e.preventDefault();
        let newUser = {
            memberNumber: e.target[0].value,
            name: e.target[1].value,
        }
        axios
        .post("http://localhost:8080/pokeuser", newUser).then(response => {
            this.props.getAll();
        }).catch(err => {
            console.log(err)
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-center jumbotron">Register</h1>
                <form className="text-center" onSubmit={this.createUser}>
                    <p>MemberNumber</p>
                    <input></input>
                    <p>Name</p>
                    <input></input>
                    <br></br>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }

}
