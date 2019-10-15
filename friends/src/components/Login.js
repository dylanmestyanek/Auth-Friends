import React, { useState } from "react"
import { render } from "@testing-library/react"

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