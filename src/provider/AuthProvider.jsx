import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    console.log(user);

    const handleRegister = (email, password, update) => {
        setErrorMessage("");
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password )
        .then(result => {
           
            updateProfile(auth.currentUser, update)
        .then(() => {
            setUser({...result.user,...update});
        })
        .catch(error => {
            setErrorMessage(error.code);
        })
        })
        .catch(error => {
            setErrorMessage(error.code);
        })
    }

    const handleSingIn = (email, password) => {
        setErrorMessage("");
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setErrorMessage(error.code);
        })
    }

    // const updateUserProfile = (update) => {
    //     updateProfile(auth.currentUser, update)
    //     .then(result => {
    //         setUser(result);
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         setErrorMessage(error.code);
    //     })
    // }

    const handleSingOut = () => {
        setLoading(true);
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe;
        }
    },[])

    const authInfo = {
        handleRegister,
        handleSingIn,
        
        handleSingOut,
        user,
        loading,
        errorMessage
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;