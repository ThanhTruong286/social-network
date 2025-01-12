import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { validateUserData } from '../utils/authUtils';
import { showAlert } from '../utils/authUtils'; // Nhập showAlert nếu cần

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerm, setAcceptTerm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Kiểm tra xác thực ở phía client
        const errors = validateUserData(name, email, password, confirmPassword);
        if (errors.length > 0) {
            // Hiển thị lỗi nếu có
            errors.forEach(error => {
                showAlert('error', 'Lỗi', error.msg);
            });
            return;
        }

        // Kiểm tra điều kiện chấp nhận điều khoản
        if (!acceptTerm) {
            showAlert('warning', 'Cảnh báo', 'Bạn cần chấp nhận điều khoản và điều kiện!');
            return;
        }

        const userData = {
            username: name,
            email,
            password,
            confirmPassword
        };

        try {
            const result = await registerUser(userData);
            showAlert('success', 'Thành công!', result.message);
            // Reset form nếu cần
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAcceptTerm(false);
        } catch (error) {
            showAlert('error', 'Lỗi', error.message || 'Đã xảy ra lỗi!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    id="email"
                    placeholder="Your Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3 form-check">
                <input
                    className="form-check-input"
                    id="acceptTerm"
                    type="checkbox"
                    checked={acceptTerm}
                    onChange={(e) => setAcceptTerm(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="acceptTerm">
                    Accept Term and Conditions
                </label>
            </div>

            <button className="btn btn-primary w-100" type="submit">
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
