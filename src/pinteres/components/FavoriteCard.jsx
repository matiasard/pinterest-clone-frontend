export const FavoriteCard = ({ item, onRemoveFromFavorites }) => {

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites(item);
  }

  return (
      <div key={item.id} className="item">
        <div className="image">
          <img src={item.url} alt={item.alt_description} />
          <button className="btn-save" onClick={handleRemoveFromFavorites}>
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
