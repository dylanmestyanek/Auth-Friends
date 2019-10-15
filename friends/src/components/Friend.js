import React from "react"
import authWithAxios from "../utils/authWithAxios"

const Friend = ({ friend, setFriends }) => {

    const deleteFriend = (id) => {
        authWithAxios().delete(`/friends/${id}`)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={() => deleteFriend(friend.id)}>Bye-Bye Friend!</button>
        </div>
    )
}

export default Friend