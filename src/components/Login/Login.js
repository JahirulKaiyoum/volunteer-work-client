import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  
    const handleSignIn = () => {

        if (firebase.apps.length===0) {
            firebase.initializeApp(firebaseConfig);
        }
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName,email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email:email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });


    }

    const [del, setDel] = useState(false);
    


    return (
        <div className='col-md-4 offset-md-4 login-form' >
            <h1 className='text-center'>Login with </h1>
            <Button className='text-center log-btn' onClick={handleSignIn}>Continue with Google</Button>
            <p className='text-center text'>Don't have an account ? <span>Creat an account</span></p>
        </div>
    );
};

export default Login;
