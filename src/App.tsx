import { useEffect, useState, useRef } from "react";
import { createApi } from "unsplash-js";
import Masonry from "@mui/lab/Masonry";
import InfiniteScroll from "react-infinite-scroll-component";

import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card";
import {useBookStore} from "./store/bookStore.ts"
import { Photo } from "./types/Photo.ts";
import { Favorite } from "./components/FavoritePhoto/Favorite.jsx";

// type Photo = {
//   id: number;
//   width: number;
//   height: number;
//   urls: { large: string; regular: string; raw: string; small: string };
//   color: string | null;
//   user: {
//     username: string;
//     name: string;
//   };
// };

const api = createApi({
  accessKey: import.meta.env.VITE_ACCESKEY
});

function App() {

  // eslint-disable-next-line prefer-const
  let index = useRef(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Photo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true)
  const val = useBookStore((state) => state.value)
  const photosSaved = useBookStore((state) => state.favorites)
  
  // console.log("dataS:", data);
  console.log("val:", val);

  useEffect(() => {
    index.current = 1;
    setHasMore(true)

    api.search
      .getPhotos({ query: val, perPage: 20, page: index.current })
      .then((result) => {
        setData(result.response?.results)
      })
      .catch(() => {
        console.log("GETPHOTOS: something went wrong!");
      });
  }, [val]);

  const moreData = () => {
    index.current = index.current + 1;
    // Deja de llamar a la funcion moreData() cuando este en la pagina 3
    if (index.current === 3) {
      setHasMore(false)
    }

    console.log("call Scroll", index.current)
    api.search
      .getPhotos({ query: val, perPage: 20, page: index.current })
      .then((result) => setData(data.concat(result.response?.results)))
      .catch(() => {
        console.log("something went wrong!");
      });
  }

  return (
    <>
      <div className="container">
        <Header />
        <h1>Favorites</h1>
        {photosSaved.length == 0 
          ? <h2>No hay nada</h2> 
          : 
            <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={{xs: 1, sm: 2, md: 3}} className="masonry">
              {photosSaved.map((item) => (
                  <Favorite key={item.id} item={item}/>
                ))}
            </Masonry> 
        }
        
        <hr />
        <br />

        <InfiniteScroll
          dataLength={data.length}
          next={moreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          style={{overflow: 'none'}}
        >
          <Masonry columns={{xs: 2, sm: 3, md: 5}} spacing={{xs: 1, sm: 2, md: 3}} className="masonry">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
