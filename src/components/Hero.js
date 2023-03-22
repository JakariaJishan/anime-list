import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../style/Hero.module.css';
function Hero() {
  const animeArr = useSelector((state) => state.animeList.animeList.data);

  return (
    <div className={styles.bg}>
      <h2 className={styles.showcaseItem}> Total Anime : {animeArr?.length}</h2>
    </div>
  )
}

export default Hero