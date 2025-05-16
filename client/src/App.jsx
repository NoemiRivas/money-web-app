import "./App.css";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TransaccionsPage from "./pages/TransaccionsPage";
import NavBar from "./components/NavBar";
import CategoryPages from "./pages/CategoryPages";
import SettingsPage from "./pages/SettingsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTransaccion from "./components/forms/AddTransaccion";
import TransactionProvider from "./context/TransactionContext";

import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  ClerkProvider,
} from "@clerk/clerk-react";

function App() {
  return (
    <TransactionProvider>
     
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<SignIn routing="path" path="/login" />}
            />
            <Route
              path="/registrarse"
              element={<SignUp routing="path" path="/registrarse" />}
            />

            <Route
              path="/update/:id"
              element={
                <SignedIn>
                  <AddTransaccion />
                </SignedIn>
              }
            />
            <Route
              path="/dashboard"
              element={
                <SignedIn>
                  <DashboardPage />
                </SignedIn>
              }
            />
            <Route
              path="/transacciones"
              element={
                <SignedIn>
                  <TransaccionsPage />
                </SignedIn>
              }
            />
            <Route
              path="/categorias"
              element={
                <SignedIn>
                  <CategoryPages />
                </SignedIn>
              }
            />
            <Route
              path="/configuracion"
              element={
                <SignedIn>
                  <SettingsPage />
                </SignedIn>
              }
            />

            {/* Ruta para manejar cualquier otra sin sesión activa */}
            <Route
              path="*"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          </Routes>
        </BrowserRouter>
   
    </TransactionProvider>
  );
}

export default App;
