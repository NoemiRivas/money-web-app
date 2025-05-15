import React, { createContext, useContext, useState } from "react";
import {
  createExpenseRequest,
  deleteExpenseRequest,
  getExpenseRequest,
  getTransactionsRequest,
  updateExpenseRequest,
} from "../hooks/transactions";

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

  const getTransactions = async () => {
    try {
      const res = await getTransactionsRequest();

      setTransacctions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTransactions = async (data) => {
    try {
      const res = await createExpenseRequest(data);
      setTransacctions([...transactions, res.data]);
      await getTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransactions = async (id) => {
    try {
      const res = await deleteExpenseRequest(id);
      if (res.status === 200) {
        setTransacctions(transactions.filter((expense) => expense._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const oneTransaction = async () => {
    try {
      const res = await getExpenseRequest();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateTransaction = async (id, expense) => {
    try {
      await updateExpenseRequest(id, expense);
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
