import instance from "./axios";

export const getCategoriesRequest = (token) =>
  instance.get("/categories/get-categories", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createCategoriesRequest = (categories, token) =>
  instance.post("/categories/add-categories", categories, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteCategoriesRequest = (id, token) =>
  instance.delete(`/categories/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateCategoriesRequest = (id, categories, token) =>
  instance.put(`/categories/update-category/${id}`, categories, {
    headers: { Authorization: `Bearer ${token}` },
  });
