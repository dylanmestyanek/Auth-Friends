import React, { useState, useEffect } from "react"

import authWithAxios from "../utils/authWithAxios"
import Friend from "./Friend"
import FriendForm from "./FriendForm"

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        authWithAxios().get("/friends")
            .then(res => setFriends(res.data))
            .catch(err => console.log(err.response))
    }, [])

    return (
        <>
            <h1>Friends List!</h1>
            <FriendForm friends={friends} setFriends={setFriends} />
            {
                friends.map((friend, idx) => <Friend key={idx} friend={friend} />)
            }
        </>
    )
}

export default FriendsList