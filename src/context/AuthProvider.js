import React from 'react'

import history from '../history'
import { Spin } from 'antd'

import { auth } from '../firebase/config';
import { useState } from 'react';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    React.useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged((user) => {
            console.log({user})
            if(user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName, email, uid, photoURL
                })
                setIsLoading(false)
                // history.push('/users')
                // window.location.href = '/users'
                // return
            }
            setIsLoading(false)
            // history.push('/sign')
            // window.location.href = '/sign'
        })

        // clean fuction
        return () => {
            unsubscribe()
        }
    },[history])

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin/> : children}
        </AuthContext.Provider>
        
    )
}
