import React, { createContext, useContext, useState } from "react";
import {
  createExpenseRequest,
  deleteExpenseRequest,
  getExpenseRequest,
  getTransactionsRequest,
  updateExpenseRequest,
} from "../hooks/transactions";
import { useAuth } from "@clerk/clerk-react";

const TransactionsContext = createContext();
export const useTransaction = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error("useTask must be used within a TransactionProvider");
  }
  return context;
};

function TransactionProvider({ children }) {
  const [transactions, setTransacctions] = useState([]);
  const { getToken } = useAuth();

  const getTransactions = async () => {
    try {
      const token = await getToken();
      const res = await getTransactionsRequest(token);

      setTransacctions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTransactions = async (data) => {
    try {
      const token = await getToken();
      const res = await createExpenseRequest(data, token);
      setTransacctions([...transactions, res.data]);
      await getTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransactions = async (id) => {
    try {
      const token = await getToken();
      const res = await deleteExpenseRequest(id, token);
      if (res.status === 200) {
        setTransacctions(transactions.filter((expense) => expense._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const oneTransaction = async () => {
    try {
      const token = await getToken();
      const res = await getExpenseRequest(token);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateTransaction = async (id, expense) => {
    try {
      const token = await getToken();
      await updateExpenseRequest(id, expense, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        oneTransaction,
        updateTransaction,
        getTransactions,
        createTransactions,
        deleteTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionProvider;
