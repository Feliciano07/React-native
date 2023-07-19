import React, { useReducer, useState } from 'react'
import { createContext } from "react";
import { authReducer } from './authReducer';



// Definir como luce la informacion
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce o que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    loading: boolean;
    handleFavoriteIcon: (iconName:string) => void;
    logout: () => void;
    handleUsername: (username:string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {


    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    const [loading, setloading] = useState(false);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const handleFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const handleUsername = (username:string) => {
        dispatch({type: 'changeUsername', payload: username})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            loading,
            handleFavoriteIcon,
            logout,
            handleUsername
        }}

        >
            {children}
        </AuthContext.Provider>
    )
}