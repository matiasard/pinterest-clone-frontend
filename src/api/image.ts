import axios from "../libs/axios";
import { PhotoSave } from "../types/Photo";


// * Guardanr imagen function
export const saveImage = async (image: PhotoSave) => {
  return await axios.post(`/api/image`, image);
}

// * Obtener imagenes guardadas del usuario
export const getAllSavedImages = async (id: number) => {
  try {
    return await axios.get(`/api/image/${id}`);
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("Error En la peticion al servidor: " + error.message);
  }
}

export const removeImage = async (id: string) => {
  // const imageIds = `${idUser}${id}`
  // return await axios.delete(`/api/image/${imageIds}`);
  console.log(id);
  return await axios.delete(`/api/image/${id}`);
}