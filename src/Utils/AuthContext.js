import React, { createContext, useState, useContext, useEffect } from 'react';

const API_URL = 'http://127.0.0.1';
const API_PORT = '8001';
const API_BASE_URL = `${API_URL}:${API_PORT}`;

const getToken = () => localStorage.getItem('userToken');
const setToken = (token) => localStorage.setItem('userToken', token);
const removeToken = () => localStorage.removeItem('userToken');

const validateToken = async () => {
    const token = getToken();
    if (!token) return [false, 0];

    const method = "POST";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    const options = {
        method,
        headers,
    };
    const response = await fetch(`${API_BASE_URL}/validate_token`, options);
    if (response.ok) {
        const json = await response.json();
        if (json?.success) {
            return [json.data.valid, json.data.type];
        }
    }
    return [false, 0];
};

const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(0);

    useEffect(() => {
        const checkToken = async () => {
            const [validToken, type] = await validateToken();
            if (validToken) {
                setIsLoggedIn(true);
                setUserType(type);
            } else {
                removeToken();
                setIsLoggedIn(false);
                setUserType(0);
            }
        };

        checkToken();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userType, setUserType }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export { getToken, setToken, removeToken, validateToken, API_BASE_URL };
