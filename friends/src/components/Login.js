import React, { useState } from "react"
import { render } from "@testing-library/react"
import axios from "axios"

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push("/friendslist")    
            })
            .catch(err => console.log(err.response))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                placeholder="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="password"
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button type="submit">Log In</button>
        </form>    
    );
}

export default Login