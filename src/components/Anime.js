import React from "react";
import { NavLink } from "react-router-dom";

function Anime({ anime }) {
  const { mal_id, title, episodes, images } = anime;

  return (
    <NavLink to={`/episodes/${mal_id}`}>
      <img src={images.jpg.image_url}></img>
      {title}
      {episodes}

      
    </NavLink>
  );
}

export default Anime;
