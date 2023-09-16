import React from "react";
import { useBookStore } from "../../store/bookStore";
import { useAuthStore } from './../../store/authStore';
import { useNavigate } from "react-router-dom";
import { saveImage } from './../../api/image';
// import { Photo } from './../types/Photo';

function Card({ item }) {
  // const addToFavorites = useBookStore((state) => state.addToFavorites);
  const favorite = useBookStore((state) => state.favorites);
  const isAuth = useAuthStore((state) => state.isAuth);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();

  const handleAddToFavorites = async () => {
    console.log('Favorito Accion boton')
    console.log(profile)
    if (isAuth) {
      const newFavoriteImage = {
        idImage: item.id,
        description: item.description,
        alt_description: item.alt_description,
        download: item.links.html,
        url: item.urls.small,
        userName: item.user.name,
        user_profile_image: item.user.profile_image.small,
        userId: profile.id,
      }

      saveImage(newFavoriteImage).then((response) => {
      console.log("FRONT:",response);
    });
    } else {
      navigate('/login')
    }

    console.log(favorite);
  };

  return (
    <div key={item.id} className="item">
      <div className="image">
        <img src={item.urls.small} alt={item.alt_description} />
        <button className="btn-save" onClick={handleAddToFavorites}>
          Guardar
        </button>
        <a className="icon-upload" href="">
          <img src="/uploadicon.png" alt="upload" />
        </a>
        <a className="icon-dots" href="">
          <img src="/dotsicon.png" alt="options" />
        </a>
      </div>
      <p>{item.description}</p>
      <div>
        <img
          className="user"
          src={item.user.profile_image.small}
          alt={item.user.name}
        />
        <span>{item.user.name}</span>
      </div>
    </div>
  );
}

export default Card;
