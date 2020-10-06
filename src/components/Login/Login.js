import React, { useContext} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase-config';

const Login = () => {
    const { allLogin } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = allLogin
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="text-center">
            <h1>This is Login</h1>
            <button className="btn btn-primary"onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;