import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const { user: {uid} } = React.useContext(AuthContext)

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        }
    }, [uid])

    const rooms = useFirestore('rooms', roomsCondition)

    // console.log({rooms});

    

    return (
        <AppContext.Provider value={{rooms}}>
            {children}
        </AppContext.Provider>
    );
}