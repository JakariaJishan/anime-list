import React, { useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEpisode } from "../redux/Anime-list/episodeSlice";
import styles from "../style/Details.module.css";
import DisplayEpisodes from "./DisplayEpisodes";
import Hero from "./Hero";

function Details() {
  const { id } = useParams();
  const episodes = useSelector((state) => state.episodeList.episodeList?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisode(id));
  }, []);

  return (
    <>
      <Hero episodes={episodes}/>
      <div className={styles.details}>
        {episodes?.map((episode) => (
          <DisplayEpisodes key={episode.mal_id} episode={episode} />
        ))}
        {
          !episodes?.length && <Circles
          height="80"
          width="80"
          color="#F95091"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
          visible={true}
        />
        }
      </div>
    </>
  );
}

export default Details;
