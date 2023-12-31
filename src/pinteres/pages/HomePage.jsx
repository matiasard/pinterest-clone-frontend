
import { useEffect, useState, useRef } from "react";
import { useBookStore } from './../../store/bookStore';
import Masonry from "@mui/lab/Masonry";
import { Alert, AlertTitle } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { createApi } from "unsplash-js";

// import { Photo } from './../../types/Photo';
import Card from "../components/Card.jsx";

const api = createApi({
  accessKey: import.meta.env.VITE_ACCESKEY
});
// import { useAuthStore } from './../../store/authStore';



export const HomePage = () => {
  let index = useRef(1)
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const query = useBookStore((state) => state.query);
  // const profile = useAuthStore((state) => state.profile);

  const showError = (<h2>No se encontro resultados</h2>);

  // console.log("Profile:", profile);
  // console.log("dataS:", data);
  // console.log("val:", val);

  useEffect(() => {
    index.current = 1;
    setHasMore(true)

    api.search
      .getPhotos({ query: query, perPage: 20, page: index.current })
      .then((result) => {
        setData(result.response?.results)
      })
      .catch(() => {
        console.log("GetPHOTOS: something went wrong! or Limits key");
      });
  }, [query]);

  

  const moreData = () => {
    index.current = index.current + 1;
    //* Deja de llamar a la funcion moreData() cuando este en la pagina 3
    if (index.current === 3) {
      setHasMore(false)
    }

    console.log("call Scroll", index.current)
    api.search
      .getPhotos({ query: query, perPage: 20, page: index.current })
      .then((result) => setData(data.concat(result.response?.results)))
      .catch(() => {
        console.log("something went wrong!");
      });
  }

  // add a conditional render
  if (!data) {
      return (
        <div>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error al cargar imágenes. <strong>Intentelo de nuevo más tarde.</strong>
          </Alert>
        </div>
      )
  }
  
  return (
    <div className="container animate__animated animate__fadeIn">
        <InfiniteScroll
          dataLength={data.length}
          next={moreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          style={{ overflow: 'none' }}
        >
          <Masonry columns={{ xs: 2, sm: 3, md: 5 }} spacing={{ xs: 1, sm: 2, md: 3 }} className="masonry">
            {
              data.length === 0
                ? showError
                : data.map((item) => (
                  <Card key={item.id} item={item} />
                ))
            }
          </Masonry>
        </InfiniteScroll>
    </div>

  )
}
