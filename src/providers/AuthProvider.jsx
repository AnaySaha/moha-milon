import React, { createContext } from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({ children}) => {

    const authInfo = {
        name: 'Nodi Sagor Khal Bill'
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