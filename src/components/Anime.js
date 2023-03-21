import React from "react";

function Anime({ anime }) {
  const { mal_id } = anime;
  return <div>{mal_id}</div>;
}

export default Anime;
