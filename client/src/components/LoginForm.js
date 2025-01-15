import React, { useState, useContext } from 'react'; // Sử dụng useContext để lấy giá trị từ AuthContext
import { loginUser } from '../services/api';
import { validateUserDataLogin, showAlert } from '../utils/authUtils';
import { AuthContext } from '../contexts/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Kiểm tra xác thực ở phía client
        const errors = validateUserDataLogin(email, password);
        if (errors.length > 0) {
            // Hiển thị lỗi nếu có
            errors.forEach(error => {
                showAlert('error', 'Lỗi', error.msg);
            });
            return;
        }

        const userData = {
            email,
            password,
        };

        try {
            const result = await loginUser(userData); // Gọi API để đăng nhập

            if (result.token) {
                login(result.token); // Lưu token vào AuthContext
            }

            showAlert('success', 'Thành công!', result.message);
            setTimeout(() => {
                window.location.href = '/'; // Chuyển hướng đến trang chính
            }, 2000);
        } catch (error) {
            showAlert('error', 'Lỗi', error.message || 'Đã xảy ra lỗi!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    className="form-control"
                    id="email"
                    placeholder="Your Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mb-3 form-check">
                <input className="form-check-input" id="rememberMe" type="checkbox" />
                <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                </label>
                <a className="forgot-password-link" href="#">
                    Forgot your Password?
                </a>
            </div>

            <button className="btn btn-primary w-100" type="submit">
                Login
            </button>
        </form>

    );
};

export default LoginForm;
