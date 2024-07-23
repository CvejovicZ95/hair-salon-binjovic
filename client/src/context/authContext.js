import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    const login = (userData) => {
        setAuthUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData))
    };

    const logout = () => {
        setAuthUser(null);
        localStorage.removeItem("authUser")
    }

    useEffect(()=> {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            setAuthUser(JSON.parse(storedUser))
        }
    },[])

    return (
        <AuthContext.Provider value={{ authUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = { children: PropTypes.any}