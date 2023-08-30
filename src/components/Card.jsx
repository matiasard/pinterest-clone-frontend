import React from "react";
import { useBookStore } from "../store/bookStore";
// import { Photo } from './../types/Photo';

function Card({ item }) {
  const addToFavorites = useBookStore((state) => state.addToFavorites);
  const favorite = useBookStore((state) => state.favorites);

  const handleAddToFavorites = () => {
    addToFavorites({
      id: item.id,
      liked_by_user: true,
      description: item.description,
      alt_description: item.alt_description,
      donwload: item.links.html,
      url: item.urls.small,
      userName: item.user.name,
      user_profile_image: item.user.profile_image.small,
    });

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
