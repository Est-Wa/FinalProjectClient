import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );
    const [LogedIn, setLogedIn] = useState(false);
    const [user, setUser] = useState({});

    const login = async ( username, password ) => {
        console.log(`username: ${username} password: ${password}`)
        const res = await axios.post("http://localhost:3600/api/auth/login",
        {user_name:username, password:password})
        setUser(res.user)
        setToken(res.data.accessToken)
        console.log(token)
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
        <AuthContext.Provider value={{ user, currentUser, setLogedIn, token, LogedIn, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
};
