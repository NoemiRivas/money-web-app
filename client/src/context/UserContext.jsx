
import { createContext, useContext, useEffect, useState } from "react";
import{loginRequest, registerRequest, verifyRequest } from "../hooks/user"
import Cookies from "js-cookie"


export const UserContext = createContext();
export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used withim an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data); 
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signOut = async () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  useEffect(() => {
    async function cheackLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }
      try {
        const res = await verifyRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setLoading(false);
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setLoading(false);
        setIsAuthenticated(false);
        setUser(null);
        console.log(error);
        
      }
    }
    cheackLogin();
  }, []);
  return (
    <UserContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        isAuthenticated,
        error,
        loading, setErrors
      }}
    >
      {children}
    </UserContext.Provider>
  );
};