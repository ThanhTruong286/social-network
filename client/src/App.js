import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './routes/router'; // Import router từ router.js

function App() {
  return (
    <Router>
      <RouterConfig /> {/* Sử dụng RouterConfig */}
    </Router>
  );
}

export default App;
