import { PRODUCT_TYPE } from "../types/ProductType";
import instance from "./axios";

export const getProducts = () => {
  return instance.get("/products");
};

export const getProduct = (id: string | undefined) => {
  return instance.get(`/products/${id}`);
};
export const addProduct = (product: PRODUCT_TYPE) => {
  return instance.post("/products", product);
};

export const editProduct = (id: string | undefined, product: PRODUCT_TYPE) => {
  return instance.put(`/products/${id}`, product);
};

export const deleteProduct = (id: string) => {
  return instance.delete(`/products/${id}`);
};

export const changeStatusOfProduct = (id: string, status: number) => {
  return instance.put(`/products/${id}`, { status: status });
};
