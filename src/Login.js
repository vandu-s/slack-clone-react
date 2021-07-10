import React from 'react'
import { useStateValue } from './StateProvider'
import "./Login.css";
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message)
            });

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.pinclipart.com/picdir/big/519-5199548_ios-slack-app-icon-clipart.png" alt="logo" />
                <h1>Sign in to Cleaver Programmer HQ</h1>
                <p>cleaverprogrammer.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>

            </div>

        </div>
    )
}

export default Login
