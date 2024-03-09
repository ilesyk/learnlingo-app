import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Home from "pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";

const Teachers = lazy(() => import('../pages/TeachersPage'));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="" element={<Home />} />
          <Route path="teachers" element={<Teachers isFavorite={false} />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Teachers isFavorite={true} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster />
    </>
  );
};
export default App;
