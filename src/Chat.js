import React from 'react';
import { useParams } from "react-router-dom";
import "./Chat.css"
const Chat = () => {
    const { roomId } = useParams()
    return (
        <div className="chat">
            <h2>you are in the {roomId}</h2>
        </div>
    )
}

export default Chat
