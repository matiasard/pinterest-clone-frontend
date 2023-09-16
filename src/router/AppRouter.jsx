import { Route, Routes } from "react-router-dom";

import { PinterestRoutes, SavedPage } from "./../pinteres";
// import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from "../auth";
import { Navbar } from './../ui/';

// import { SavedPage } from './../pinteres/pages/SavedPage';
import { useAuthStore } from './../store/authStore';
import { RegisterPage } from "../auth/pages/RegisterPage";

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

         <Route path="auth/*" element={ 
          <PublicRoute> 
            <Routes>
              <Route path="/*" element={ <LoginPage /> } />
              <Route path="/register" element={ <RegisterPage /> } />
            </Routes>
          </PublicRoute>
        } />

        {/* <Route path="/login" element={ 
          <PublicRoute> 
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/register" element={ <RegisterPage /> } /> */}

        {/* <Route path="/*" element={ 
          <PrivateRoute> 
            <PinterestRoutes />
          </PrivateRoute>
        } /> */}


      </Routes>
    </>
  );
};
