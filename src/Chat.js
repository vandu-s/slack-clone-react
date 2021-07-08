import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import InfoOutlinedIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import "./Chat.css"
import db from './firebase';
import Message from './Message'
const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
                ))

        }
        db.collection('rooms').doc(roomId)
            .collection('Messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot =>
                setRoomMessages(
                    snapshot.docs.map(doc =>
                        doc.data())
                ))


    }, [roomId])
    console.log(roomDetails)
    console.log(roomMessages)


    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details

                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {/* Message */}
                {roomMessages.map(({ message, timestamp, username, userImage }) => (

                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={username}
                        userImage={userImage} />

                ))}
            </div>
        </div>
    )
}

export default Chat
