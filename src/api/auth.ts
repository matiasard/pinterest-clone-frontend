// import axios from 'axios'
import axios from "../libs/axios";
// import { Photo } from "../types/Photo";

export const loginRequest = async (email: string, password: string) => {
  try {
    return await axios.post("/api/auth/login", {
      email,
      password,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      data:{
        ok: false,
        message: "Login failed",
        error: error?.response?.data?.error,
      }
    }
  }
};

export const registerRequest = async (username: string, email: string, password: string) => {
  return await axios.post("/api/auth/register", {
    username,
    email,
    password,
  });
};
