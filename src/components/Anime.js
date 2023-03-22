import React from "react";
import { NavLink } from "react-router-dom";

function Anime({ anime }) {
  const { mal_id, title, episodes, images } = anime;

  return (
    <NavLink to={`/episodes/${mal_id}`}className>
      <img src={images.jpg.image_url}width='300px' height='400px'></img>
      <h2>{title}</h2>
      <h3>{episodes}</h3>

      
    </NavLink>
  );
}

export default Anime;
