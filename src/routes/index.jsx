import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../components/Loading/Loading";


const AppRoutes = () => {
  const Home = React.lazy(() => import("../pages/home"));
  const Join = React.lazy(() => import("../pages/join"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading/>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/join"
          element={
            <Suspense fallback={<Loading/>}>
              <Join />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
