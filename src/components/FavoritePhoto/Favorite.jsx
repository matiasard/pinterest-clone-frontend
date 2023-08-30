import { useBookStore } from "../../store/bookStore";

export const Favorite = ({ item }) => {
    const removeFavorite = useBookStore((state) => state.removeFromFavorites);

  const handleRemoveFromFavorites  = (photoId) => () => {
      removeFavorite(photoId)
      console.log("Eliminado")
      console.log(item);
  };

  return (
      <div key={item.id} className="item">
        <div className="image">
          <img src={item.url} alt={item.alt_description} />
          <button className="btn-save" onClick={handleRemoveFromFavorites (item)}>
            Borrar
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
            src={item.user_profile_image}
            alt={item.userName}
          />
          <span>{item.userName}</span>
        </div>
      </div>
  );
};
