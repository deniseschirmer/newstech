import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const AppRoutes = () => {
  const Home = React.lazy(() => import("../pages/home"));
  const Join = React.lazy(() => import("../pages/join"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/join"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Join />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
