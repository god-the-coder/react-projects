import { useContext,useState } from "react"
import React from "react"
import UserContext from "../context/UserContext"

export default function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>Please Login</div>
    else {
        return (
            <div>Welcome {user.username}</div>
        )
    }
}       