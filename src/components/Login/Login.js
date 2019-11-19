import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    state = {
        email: '',
        password: '',
        servResponse: ''
    }

    onInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    submitLogin = () => {
        axios.post('https://projectxapp1.herokuapp.com/login', { email: this.state.email, password: this.state.password })
            .then(res => {
                console.log(res.data)
                this.setState({
                    servResponse: res.data
                })
            })
    }


    render() {
        return (
            <>
                <h1>login</h1>
                <label htmlFor="">Email</label>
                <br />
                <input type="email" name='email' onChange={this.onInputChange} value={this.state.email} />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name='password' onChange={this.onInputChange} value={this.state.password} />
                <br />
                <button onClick={this.submitLogin} >Login</button>
                <br />
                {this.state.servResponse && <div className="error">{this.state.servResponse}</div>}
            </>
        );
    }
}

export default Login;