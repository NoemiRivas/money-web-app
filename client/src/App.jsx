import "./App.css";

import DashboardPage from "./pages/DashboardPage";
import TransaccionsPage from "./pages/TransaccionsPage";
import NavBar from "./components/NavBar";
import CategoryPages from "./pages/CategoryPages";
import SettingsPage from "./pages/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTransaccion from "./components/forms/AddTransaccion";
import TransactionProvider from "./context/TransactionContext";
import CategoriesProvider from "./context/CategoriesContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TransactionProvider>
        <CategoriesProvider>
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
                element={
                  <div className="flex justify-center items-center py-4 h-[100v]">
                    <SignUp routing="path" path="/registrarse" />
                  </div>
                }
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
              <Route path="/perfil" element={<SettingsPage />} />
              <Route
                path="/login"
                element={
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                }
              />
            </Routes>
          </BrowserRouter>
        </CategoriesProvider>
      </TransactionProvider>
    </LocalizationProvider>
  );
}

export default App;
