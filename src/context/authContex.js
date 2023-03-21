import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );
    const [LogedIn, setLogedIn] = useState(false);

    const login = async ({ username, password }) => {

    };
    const logout = () => {

        setCurrentUser(null);
        setToken(null);
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    return (
        <AuthContext.Provider value={{ currentUser, setLogedIn, token, LogedIn, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
};
