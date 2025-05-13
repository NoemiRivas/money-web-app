import { useState, useEffect, useCallback } from "react";
import apiService from "../services/apiservices";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const getAllTransactions = useCallback(async () => {
    if (!token) return setLoading(false);

    try {
      const response = await apiService.get(
        "http://localhost:5000/api/all-expenses",
        token
      );
      const mappedTransactions = response.data.expenses.map((transaction) => ({
        id: transaction._id,
        description: transaction.description,
        type: transaction.type,
        amount: transaction.amount,
        category: transaction.category,
        date: new Date(transaction.date).toLocaleDateString("es-ES"),
      }));

      setTransactions(mappedTransactions);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener transacciones:", error);
    }
    setLoading(false);
  }, [token]);

  const addTransaction = async (formData) => {
    if (!token) return;
    await apiService.post(
      "http://localhost:5000/api/add-expense",
      formData,
      token
    );
    await getAllTransactions();
  };

  const updateTransaction = async (formData) => {
    if (!token) return;
    await apiService.put(
      `http://localhost:5000/api/update/${formData.id}`,
      formData,
      token
    );
    await getAllTransactions();
  };

  const removeTransaction = async (id) => {
    if (!token) return;
    await apiService.delete(`http://localhost:5000/api/remove/${id}`, token);
    await getAllTransactions();
  };

  useEffect(() => {
    if (token) getAllTransactions();
  }, [getAllTransactions, token]);

  return {
    transactions,
    loading,
    getAllTransactions,
    addTransaction,
    updateTransaction,
    removeTransaction,
  };
};
