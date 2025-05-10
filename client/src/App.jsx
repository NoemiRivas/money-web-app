import React from "react";
import "./App.css";
//context
import { UserProvider } from "./context/userContext";

//components
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TransaccionsPage from "./pages/TransaccionsPage";
import NavBar from "./components/NavBar";
import CategoryPages from "./pages/CategoryPages";
import SettingsPage from "./pages/SettingsPage";
//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/privateRoutes/requireAuth";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transacciones" element={<TransaccionsPage />} />
            <Route path="/categorias" element={<CategoryPages />} />
            <Route path="/configuracion" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
