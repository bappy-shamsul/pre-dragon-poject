import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Fairebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOutUser = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('Sined in user')
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    }, [])

    const authInformation = {user, createUser, signInUser, signOut, logOutUser}
    console.log(authInformation);
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}