// Import các module cần thiết
const express = require('express'); // Thư viện Express để tạo ứng dụng web
const dotenv = require('dotenv'); // Thư viện để quản lý biến môi trường từ file .env
const cookieParser = require('cookie-parser'); // Thư viện để phân tích cookie từ yêu cầu
const authRoutes = require('./routes/authRoutes'); // Đường dẫn tới các routes cho xác thực người dùng
const errorMiddleware = require('./middlewares/errorMiddleware'); // Đường dẫn tới middleware xử lý lỗi

// Tải biến môi trường từ file .env
dotenv.config();

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình middleware
app.use(cookieParser()); // Sử dụng cookie-parser để phân tích cookie
app.use(express.json()); // Sử dụng middleware để phân tích JSON trong body của yêu cầu
app.use(require('cors')({ origin: 'http://localhost:3000', credentials: true })); // Cấu hình CORS cho phép yêu cầu từ localhost:3000
app.use(express.urlencoded({ extended: true })); // Phân tích dữ liệu URL-encoded từ form (thí dụ: các yêu cầu POST)

// Định nghĩa các routes cho xác thực
app.use('/api/auth', authRoutes); // Tất cả các yêu cầu đến /api/auth sẽ được chuyển đến authRoutes

// Sử dụng middleware xử lý lỗi
app.use(errorMiddleware); // Xử lý lỗi toàn cục cho ứng dụng

// Lấy cổng từ biến môi trường hoặc sử dụng cổng mặc định
const PORT = process.env.PORT || 6969;

// Khởi động máy chủ và lắng nghe yêu cầu trên cổng đã chỉ định
app.listen(PORT, () => {
    console.log("Server is running on port", PORT); // In ra thông báo khi server đã khởi động thành công
})

// Xuất ứng dụng để sử dụng ở nơi khác (như trong các bài kiểm tra)
module.exports = app; 
