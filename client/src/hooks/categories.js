import instance from "./axios";

export const getCategoriesRequest = () =>
  instance.get("/categories/get-categories");
export const createCategoriesRequest = (categories) =>
  instance.post("/categories/add-categories", categories);
export const deleteCategoriesRequest = (id) =>
  instance.delete(`/categories/delete/${id}`);
export const updateCategoriesRequest = (id, categories) =>
  instance.put(`/categories/update-category/${id}`, categories);
