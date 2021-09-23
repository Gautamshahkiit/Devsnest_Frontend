import React from 'react';
import { useState } from 'react';

const Context = React.createContext();

export default Context;

const wait = ()=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,1000);
    })
}

export function AuthContext({children}){

    const [loggedIn,setLoggedIn] = useState(false);
    const [loading,setLoading] = useState(false);
    const userInfo = {
        loggedIn: loggedIn,
        loading: loading,
        toggle: ()=>{
            setLoading(true);
            wait().then(()=>{
                setLoading(false);
                setLoggedIn(!loggedIn);
            })
        },
    }
    return(
        <Context.Provider value={userInfo}>
            {children}
        </Context.Provider>
    )
}   