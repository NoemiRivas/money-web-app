import React, { createContext, useEffect, useState, useCallback } from "react";

import { useTransactions } from "../hooks/useTransactions";
import { useCategory } from "../hooks/useCategory";
import { useUser } from "../hooks/useUser";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const transactionState = useTransactions();
  const userState = useUser();
  const categoryState = useCategory();

  return (
    <UserContext.Provider
      value={{
        ...userState,
        ...transactionState,
        ...categoryState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
