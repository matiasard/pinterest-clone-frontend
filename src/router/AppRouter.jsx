import { Route, Routes } from "react-router-dom";

import { PinterestRoutes, SavedPage } from "./../pinteres";
// import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from "../auth";
import { Navbar } from './../ui/';

// import { SavedPage } from './../pinteres/pages/SavedPage';
import { useAuthStore } from './../store/authStore';

export const AppRouter = () => {
  const isAuth = useAuthStore(state => state.isAuth);

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/login" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <PinterestRoutes /> } />

        <Route element={ <ProtectedRoute isAllowed={isAuth}/>} >
          <Route path="/guardado" element={<SavedPage />} />
        </Route>

        <Route path="/login" element={ 
          <PublicRoute> 
            <LoginPage />
          </PublicRoute>
        } />
        

        {/* <Route path="/*" element={ 
          <PrivateRoute> 
            <PinterestRoutes />
          </PrivateRoute>
        } /> */}


      </Routes>
    </>
  );
};
