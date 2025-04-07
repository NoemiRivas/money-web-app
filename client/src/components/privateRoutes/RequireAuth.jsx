import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function RequireAuth() {
  const { user, clearTransactions } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      clearTransactions(); 
    }
  }, [user, clearTransactions]);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>;
}
