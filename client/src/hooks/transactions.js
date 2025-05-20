import instance from "./axios"

export const getTransactionsRequest = (token) =>
  instance.get("/expense/all-expenses", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getExpenseRequest = (id, token) =>
  instance.get(`/expense/getExpense/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createExpenseRequest = (expense, token) =>
  instance.post("/expense/add-expense", expense, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteExpenseRequest = (id, token) =>
  instance.delete(`/expense/remove/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateExpenseRequest = (id, expense, token) =>
  instance.put(`/expense/update/${id}`, expense, {
    headers: { Authorization: `Bearer ${token}` },
  });