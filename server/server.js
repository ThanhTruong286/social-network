const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(require('cors')({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})