import { Route, Routes } from "react-router-dom";

import { PinterestRoutes } from "./../pinteres";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />

        <Route path="/*" element={ <PinterestRoutes /> } />

      </Routes>
    </>
  );
};
