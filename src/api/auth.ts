// import axios from 'axios'
import axios from "../libs/axios";

export const loginRequest = async (email: string, password: string) => {
  return await axios.post("/api/auth/login", {
    email,
    password,
  });
};

export const productIdRequest = async (productId: number) => {
  return await axios.get(`/api/product/${productId}`);
}
