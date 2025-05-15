import axios from "./axios"

export const getTransactionsRequest = ()=> axios.get("expense/all-expenses")
export const getExpenseRequest = (id) => axios.get(`expense/getExpense/${id}`);
export const createExpenseRequest = (expense) => axios.post("expense/add-expense", expense);
export const deleteExpenseRequest = (id) => axios.delete(`/expense/remove/${id}`);
export const updateExpenseRequest = (id,expense) => axios.put(`/expense/update/${id}`, expense);
