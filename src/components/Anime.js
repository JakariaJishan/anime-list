import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../images/right-arrow.png';
import styles from '../style/Anime.module.css';

function Anime({ anime }) {
  const {
    title, episodes, images,
  } = anime;
  const id = anime.mal_id;
  return (
    <>
      <NavLink to={`/episodes/${id}`}>
        <div className={styles.rightArrow}>
          <img src={arrow} alt="right arrow icon" />
        </div>
        <div className={styles.card}>
          <img src={images.jpg.image_url} width="150px" height="200px" alt="anime " />
          <div className={styles.cardTitle}>
            <h2>{title}</h2>
            <h5>
              Total Episodes :
              {episodes}
            </h5>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Anime;
