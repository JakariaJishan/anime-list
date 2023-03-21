import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchEpisode } from "../redux/Anime-list/episodeSlice";

function Anime({ anime }) {
  const { mal_id, title, episodes, images } = anime;
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(fetchEpisode(id));
  };

  return (
    <NavLink to="/episode" onClick={() => handleClick(mal_id)}>
      <img src={images.jpg.image_url}></img>
      {title}
      {episodes}
    </NavLink>
  );
}

export default Anime;
