import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";

const Home = lazy(() => import("../pages/Homepage/HomePage"));
const Catalog = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const Favourites = lazy(() => import("../pages/FavouritePage/FavouritePage"));

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home/>} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favourites/> } />
        </Route>
        </Routes>
    </div>
  );
};
