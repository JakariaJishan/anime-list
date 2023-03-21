import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import Layouts from "./components/Layouts";
function App() {
  return <>
      <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route index element={<Home/>}/>
          <Route path="details" element={<Details/>}/>
        </Route>
      </Routes>
  </>;
}

export default App;
