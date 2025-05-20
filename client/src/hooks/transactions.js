import instance from "./axios"

export const getTransactionsRequest = ()=> instance.get("/expense/all-expenses")
export const getExpenseRequest = (id) => instance.get(`/expense/getExpense/${id}`);
export const createExpenseRequest = (expense) => instance.post("/expense/add-expense", expense);
export const deleteExpenseRequest = (id) => instance.delete(`/expense/remove/${id}`);
export const updateExpenseRequest = (id,expense) => instance.put(`/expense/update/${id}`, expense);
