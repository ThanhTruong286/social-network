import Swal from 'sweetalert2';

/**
 * Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau hay không
 * @param {string} password - Mật khẩu
 * @param {string} confirmPassword - Mật khẩu xác nhận
 * @throws Ném lỗi nếu mật khẩu không khớp
 */
export const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error('Mật khẩu xác nhận không khớp');
    }
};

/**
 * Kiểm tra dữ liệu người dùng
 * @param {string} username - Tên người dùng
 * @param {string} email - Địa chỉ email
 * @param {string} password - Mật khẩu
 * @param {string} confirmPassword - Mật khẩu xác nhận
 * @returns {Array} Mảng các lỗi nếu có
 */
export const validateUserData = (username, email, password, confirmPassword) => {
    const errors = [];

    // Kiểm tra tên người dùng
    if (!username) {
        errors.push({ param: 'username', msg: 'Tên người dùng không được để trống.' });
    } else if (username.length < 3) {
        errors.push({ param: 'username', msg: 'Tên người dùng phải có ít nhất 3 ký tự.' });
    }

    // Kiểm tra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push({ param: 'email', msg: 'Email không được để trống.' });
    } else if (!emailPattern.test(email)) {
        errors.push({ param: 'email', msg: 'Email không hợp lệ.' });
    }

    // Kiểm tra mật khẩu
    const isPasswordStrong = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    };

    if (!password) {
        errors.push({ param: 'password', msg: 'Mật khẩu không được để trống.' });
    } else if (password.length < 6) {
        errors.push({ param: 'password', msg: 'Mật khẩu phải có ít nhất 6 ký tự.' });
    } else if (!isPasswordStrong(password)) {
        errors.push({ param: 'password', msg: 'Mật khẩu phải có ít nhất 1 ký tự hoa, 1 ký tự thường, 1 chữ số và 1 ký tự đặc biệt.' });
    }

    // Kiểm tra mật khẩu xác nhận
    if (confirmPassword !== password) {
        errors.push({ param: 'confirmPassword', msg: 'Mật khẩu và xác nhận mật khẩu không khớp.' });
    }

    return errors;
};

/**
 * Kiểm tra dữ liệu người dùng
 * @param {string} email - Địa chỉ email
 * @param {string} password - Mật khẩu
 * @returns {Array} Mảng các lỗi nếu có
 */
export const validateUserDataLogin = (email, password) => {
    const errors = [];

    // Kiểm tra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push({ param: 'email', msg: 'Email không được để trống.' });
    } else if (!emailPattern.test(email)) {
        errors.push({ param: 'email', msg: 'Email không hợp lệ.' });
    }

    // Kiểm tra mật khẩu
    const isPasswordStrong = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    };

    if (!password) {
        errors.push({ param: 'password', msg: 'Mật khẩu không được để trống.' });
    } else if (password.length < 6) {
        errors.push({ param: 'password', msg: 'Mật khẩu phải có ít nhất 6 ký tự.' });
    } else if (!isPasswordStrong(password)) {
        errors.push({ param: 'password', msg: 'Mật khẩu phải có ít nhất 1 ký tự hoa, 1 ký tự thường, 1 chữ số và 1 ký tự đặc biệt.' });
    }

    return errors;
};

/**
 * Hiển thị thông báo sử dụng SweetAlert2
 * @param {string} icon - Loại biểu tượng ('success', 'error', 'warning', v.v.)
 * @param {string} title - Tiêu đề của thông báo
 * @param {string} text - Nội dung thông báo
 */
export const showAlert = (icon, title, text) => {
    Swal.fire({ icon, title, text });
};
