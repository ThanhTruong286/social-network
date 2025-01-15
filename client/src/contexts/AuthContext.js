import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true); // Thêm trạng thái loading

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuth(token);
        }
        setLoading(false); // Hoàn thành quá trình kiểm tra
    }, []);

    const login = (token) => {
        setAuth(token);
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
