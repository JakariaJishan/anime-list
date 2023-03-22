import React from "react";
import styles from "../style/DisplayEpisodes.module.css";

function DisplayEpisodes({ episode }) {
  const { title, score, mal_id } = episode;
  return (
    <div className={styles.episodeBody}>
      <div className={styles.episodeItems}>
        <div>
          <p>Episode: {mal_id}</p>
          <h2>{title}</h2>
        </div>
        <p>Rating: {score}</p>
      </div>
    </div>
  );
}

export default DisplayEpisodes;
