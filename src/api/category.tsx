import instance from "./axios";

export const getAllCate = () => {
  return instance.get("/category");
};
