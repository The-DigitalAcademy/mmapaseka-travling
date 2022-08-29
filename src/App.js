import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mmapaseka-travling" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </div>

  );
}
export default App
