import React, { useState } from "react"

import authWithAxios from "../utils/authWithAxios"

const FriendForm = ({ friends, setFriends }) => {
    const [friendInfo, setFriendInfo] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const handleChange = e => {
        const {name, value} = e.target
        setFriendInfo({
            ...friendInfo,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        authWithAxios().post("/friends", friendInfo)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err.response))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Name"
                value={friendInfo.name}
                onChange={handleChange}
            />
            <input 
                type="number"
                name="age"
                placeholder="Age"
                value={friendInfo.age}
                onChange={handleChange}
            />
            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={friendInfo.email}
                onChange={handleChange}
            />
            <button type="submit">Add Friend!</button>
        </form>
    )
}

export default FriendForm