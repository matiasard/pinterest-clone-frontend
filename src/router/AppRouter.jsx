import {Route, Routes} from 'react-router-dom';
import App from '../PinterestApp';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/guardado" element={<App />}/>
        </Routes>
    </>
  )
}
