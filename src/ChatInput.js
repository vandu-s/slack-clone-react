import React, { useState } from 'react'
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { firebase } from './firebase';

function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    const onInputChange = (e) => {
        setInput(e.target.value)

    }

    const sendMessage = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').
                doc(channelId).collection('Messages').add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user?.displayName,
                    userImage: user?.photoURL,

                })


        }
        setInput(" ")

    }
    return (
        <div className="chatInput">
            <form >
                <input type="text"
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={onInputChange} />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>

        </div>
    )
}

export default ChatInput
