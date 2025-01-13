import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Hàm đăng nhập người dùng
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/login`, userData);
        return response.data; // Trả về dữ liệu từ phản hồi
    } catch (error) {
        throw error.response ? error.response.data : { message: 'Đã xảy ra lỗi' };
    }
};

// Hàm đăng ký người dùng
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/register`, userData);
        return response.data; // Trả về dữ liệu từ phản hồi
    } catch (error) {
        throw error.response ? error.response.data : { message: 'Đã xảy ra lỗi' };
    }
};