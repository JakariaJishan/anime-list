import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEpisode } from "../redux/Anime-list/episodeSlice";
import DisplayEpisodes from "./DisplayEpisodes";

function Details() {
  const { id } = useParams();
  const episodes = useSelector((state) => state.episodeList.episodeList?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisode(id));
  }, []);

  return (
    <div>
      {episodes?.map((episode) => (
        <DisplayEpisodes key={episode.mal_id} episode={episode} />
      ))}
    </div>
  );
}

export default Details;
