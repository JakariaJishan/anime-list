import React from "react";

function Anime({ anime }) {
  const { mal_id } = anime;
  console.log(mal_id);
  return <div>{mal_id}</div>;
}

export default Anime;
