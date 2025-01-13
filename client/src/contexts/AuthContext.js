import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/api';
import { showAlert } from '../utils/authUtils';


// Tạo Context
const AuthContext = createContext();

// Tạo Provider
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Lấy token từ cookie và kiểm tra xác thực
    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            setIsAuthenticated(true);
            // Nếu bạn muốn lưu thông tin người dùng, bạn có thể giải mã token và lưu vào state
            // const userData = decodeToken(token); // Giả sử bạn có hàm để giải mã token
            // setUser(userData);
        }
    }, []);

    // Hàm đăng nhập
    const login = async (userData) => {
        try {
            const result = await loginUser(userData); // Gọi API đăng nhập
            showAlert('success', 'Thành công!', result.message);
            setTokenCookie(result.token); // Lưu token vào cookie
            setIsAuthenticated(true);
            setUser(result.user); // Lưu thông tin người dùng nếu cần
        } catch (error) {
            showAlert('error', 'Lỗi', error.message || 'Đã xảy ra lỗi!');
        }
    };

    // Hàm đăng xuất
    const logout = () => {
        deleteTokenCookie(); // Xóa cookie chứa token
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hàm lấy cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

// Hàm lưu token vào cookie
const setTokenCookie = (token) => {
    document.cookie = `token=${token}; path=/; secure; HttpOnly; SameSite=Strict;`;
};

// Hàm xóa token khỏi cookie
const deleteTokenCookie = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

export { AuthProvider, AuthContext };
