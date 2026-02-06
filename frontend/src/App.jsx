import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen absolute inset-0 bg-gradient-to-br from-gray-400 via-white/10 to white/5">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
