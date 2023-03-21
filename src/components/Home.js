import React from "react";
import { useSelector } from "react-redux";
import Anime from "./Anime";

function Home() {
  const animeArr = useSelector((state) => state.animeList[0].data);
  return (
    <div>
      {animeArr.map((anime) => (
        <Anime key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}

export default Home;
