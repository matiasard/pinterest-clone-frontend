// import { Masonry } from '@mui/lab/Masonry';
import Masonry from "@mui/lab/Masonry";
import { useBookStore } from './../../store/bookStore';

import { FavoriteCard } from './../components/FavoriteCard';

export const SavedPage = () => {
  const photosSaved = useBookStore((state) => state.favorites)

  return (
    <div className="container">
      <h1>Favorites</h1>
        {photosSaved.length == 0 
          ? <h2>No hay nada</h2> 
          : 
            <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={{xs: 1, sm: 2, md: 3}} className="masonry">
              {photosSaved.map((item) => (
                  <FavoriteCard key={item.id} item={item}/>
                ))}
            </Masonry> 
        }
    </div>
  )
}
