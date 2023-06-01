import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );
    const [LogedIn, setLogedIn] = useState(JSON.parse(localStorage.getItem("user")) ? true : false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (username, password) => {
        console.log(`username: ${username} password: ${password}`);
        const res = await axios.post("http://localhost:3600/api/auth/login",{ user_name: username, password: password });
        setUser(res.data.user);
        setToken(res.data.accessToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setLogedIn(false)
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);
    const values = { user, setLogedIn, token, LogedIn, login, logout }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>

    )
};
