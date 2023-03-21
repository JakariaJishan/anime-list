import React from "react";
import { useSelector } from "react-redux";
import Anime from "./Anime";

function Home() {
  const animeArr = useSelector((state) => state);
  console.log(animeArr.animeList.data);
  return (
    <div>
      {animeArr.animeList.data?.map((anime) => (
        <Anime key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}

export default Home;
