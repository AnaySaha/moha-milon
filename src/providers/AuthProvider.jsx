import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);
    const name = 'potato alu mia' ;

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = (email, password) =>{
        return signOut(auth);
    }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('current User', currentUser);
            setUser(currentUser);
        })

        return () =>{
            unSubscribe();
        }

    },[]);

    onAuthStateChanged(auth, currentUser =>{
        if(currentUser){
            console.log('currently logged user', currentUser);
            setUser(currentUser);
        }
        else {
            console.log('No User logged in');
            setUser(null);
        }
    })

    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;


/**
 * 1. create contex with null as defaul
 * 2. Create Provider
 * 3. Set a value with something (auth info)
 * 4. [attention please!!!]
 * 5. use the authprovider in the main . jsx
 * 6. access the children inside the authProvider in the main.jsx
    7. export auth contex
*/ 