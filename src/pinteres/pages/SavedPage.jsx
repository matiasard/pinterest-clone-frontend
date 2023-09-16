// import { Masonry } from '@mui/lab/Masonry';
import { useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { Alert, AlertTitle } from "@mui/material";
// import { useBookStore } from './../../store/bookStore';

import { FavoriteCard } from "./../components/FavoriteCard";
import { useAuthStore } from "./../../store/authStore";
import { getAllSavedImages, removeImage } from "../../api/image";

export const SavedPage = () => {
  // const photosSaved = useBookStore((state) => state.favorites)
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const ID_USER = useAuthStore((state) => state.profile?.id);

  const fetchSavedImages = () => {
    getAllSavedImages(ID_USER)
      .then((response) => {
        console.log(response.data?.imagesSaved);
        if (response.data?.ok == true) {
          setLoad(false);
        }
        setImages(response.data?.imagesSaved);
      })
      .catch((error) => {
        // Capturar y establecer el error en caso de falla
        console.log(error)
        setError(error);
      });
  };

  const handleRemoveFromFavorites = (image) => {
    console.log("REMOVER IMAGEN: ", image);
    // const { id, userId } = image;
    // removeImage(id, userId)
    const { id } = image;
    removeImage(id)
      .then((res) => {
        console.log(res.data);
        // Actualiza las imágenes después de eliminar
        fetchSavedImages();
      })
      .catch((error) => {
        console.error("Error al eliminar la imagen", error);
      });
  };

  useEffect(() => {
    fetchSavedImages();
  }, []);

  return (
    <div className="container">
      <h1>Imagenes Guardadas</h1>
      {error ? (
        <div>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error al cargar imágenes guardadas. <strong>Intentelo de nuevo más tarde.</strong>
          </Alert>
        </div>
      ) : load ? (
        <div>
          <img
            src="https://media.tenor.com/-sL5lSwzQSkAAAAi/rolling-cute.gif"
            alt="gato"
            style={{ width: "200px" }}
          />
          <h2>Cargando...</h2>
        </div>
      ) : (
        <Masonry
          columns={{ xs: 2, sm: 3, md: 5 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          className="masonry"
        >
          {images.map((item) => (
            <FavoriteCard
              key={item.id}
              item={item}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </Masonry>
      )}
    </div>
  );
};
