import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './routes/router'; // Import router từ router.js
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <RouterConfig /> {/* Sử dụng RouterConfig */}
      </AuthProvider>
    </Router>
  );
}

export default App;
