import React, { useState } from "react";
import { useSelector } from "react-redux";
import Anime from "./Anime";

function Home() {
  const animeArr = useSelector((state) => state.animeList.animeList.data);

  const [finalAnime, setFinalAnime] = useState(animeArr);

  const handleOnChange = (e) => {
    const filteredAnime = animeArr.filter(
      (anime) =>
        anime.title
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFinalAnime(filteredAnime);
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleOnChange(e)} />
      <br />
      {finalAnime === undefined &&
        animeArr?.map((anime) => <Anime key={anime.mal_id} anime={anime} />)}
      {finalAnime?.map((anime) => (
        <Anime key={anime.mal_id} anime={anime} />
      ))}

      {/* {!finalAnime?.length && <p>no found</p>} */}
    </div>
  );
}

export default Home;
