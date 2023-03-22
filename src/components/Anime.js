import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../images/right-arrow.png";
import styles from "../style/Anime.module.css";

function Anime({ anime }) {
  const { mal_id, title, episodes, images } = anime;

  return (
    <>
      <NavLink to={`/episodes/${mal_id}`}>
        <div className={styles.rightArrow}>
          <img src={arrow} alt="right arrow icon" />
        </div>
        <div className={styles.card}>
          <img src={images.jpg.image_url} width="150px" height="200px"></img>
          <div className={styles.cardTitle}>
            <h3>{title}</h3>
            <h5>Total Episodes : {episodes}</h5>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Anime;
