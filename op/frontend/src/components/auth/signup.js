import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email:"",
            errors:{}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        try {
            this.props.signUpUser(this.state).then(() =>  this.props.history.push("/ops/"));
        } catch (error) {
            throw error
        }
        
                
        }

    render() {
        return (
            <div className='authDiv'>
                <h3>Signup</h3>
                <br></br>
                <form className="authForm" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <br></br>
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                        { this.state.errors.username ? this.state.errors.username : null}
                        <br></br>
                    <label>
                        Email:
                    </label>
                    <br></br>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        { this.state.errors.email ? this.state.errors.email : null}
                        <br></br>
                    <label>
                        Password:
                    </label>
                    <br></br>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        { this.state.errors.password ? this.state.errors.password : null}
                        <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup);