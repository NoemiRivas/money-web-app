import { useState, useCallback } from "react";
import { apiUpdateUser } from "../../services/userService";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const updateUser = useCallback((userData) => {
    setUser(userData);
  }, []);
  const modifyUser = useCallback(async (formData) => {
    await apiUpdateUser(formData);
  }, []);

  const clearUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
    clearTransactions(); 
  }, []);
  return { user, updateUser, modifyUser, clearUser };
};
