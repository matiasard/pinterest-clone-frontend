import { Navigate, Routes, Route } from 'react-router-dom';
import { HomePage, SavedPage } from './../pages';
import { Navbar } from './../../ui';

export const PinterestRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/guardado" element={<SavedPage />} />

        {/* Falta la ruta de: User */}

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}
