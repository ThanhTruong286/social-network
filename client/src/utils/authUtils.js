import Swal from 'sweetalert2';

// Hàm kiểm tra mật khẩu
export const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error('Mật khẩu xác nhận không khớp');
    }
};

export const validateUserData = (username, email, password, confirmPassword) => {
    const errors = [];

    // Kiểm tra tên người dùng
    if (!username) {
        errors.push({ param: 'username', msg: 'Tên người dùng không được để trống.' });
    } else if (username.length < 3) {
        errors.push({ param: 'username', msg: 'Tên người dùng phải có ít nhất 3 ký tự.' });
    }

    // Kiểm tra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex để kiểm tra định dạng email
    if (!email) {
        errors.push({ param: 'email', msg: 'Email không được để trống.' });
    } else if (!emailPattern.test(email)) {
        errors.push({ param: 'email', msg: 'Email không hợp lệ.' });
    }

    // Kiểm tra mật khẩu
    if (!password) {
        errors.push({ param: 'password', msg: 'Mật khẩu không được để trống.' });
    } else if (password.length < 6) {
        errors.push({ param: 'password', msg: 'Mật khẩu phải có ít nhất 6 ký tự.' });
    }

    // Kiểm tra xác nhận mật khẩu
    if (confirmPassword !== password) {
        errors.push({ param: 'confirmPassword', msg: 'Mật khẩu và xác nhận mật khẩu không khớp.' });
    }

    return errors; // Trả về mảng lỗi nếu có
};

// Hàm hiển thị thông báo
export const showAlert = (icon, title, text) => {
    Swal.fire({ icon, title, text });
};
