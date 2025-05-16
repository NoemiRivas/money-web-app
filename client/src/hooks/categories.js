import axios from "./axios";

export const getCategoriesRequest = () =>
  axios.get("categories/get-categories");
export const createCategoriesRequest = (categories) =>
  axios.post("categories/add-categories", categories);
export const deleteCategoriesRequest = (id) =>
  axios.delete(`/categories/delete/${id}`);
export const updateCategoriesRequest = (id, categories) =>
  axios.put(`/categories/update-category/${id}`, categories);
