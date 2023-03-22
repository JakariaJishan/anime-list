import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import Layouts from "./components/Layouts";
import { fetchAnime } from "./redux/Anime-list/animeSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnime());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/episodes/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
