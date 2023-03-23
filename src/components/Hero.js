import React from 'react';
import styles from '../style/Hero.module.css';

function Hero(props) {
  return (
    <div className={styles.bg}>
      {props?.animeArr && (
        <h2 className={styles.showcaseItem}>
          {' '}
          Total Anime :
          {' '}
          {props?.animeArr?.length}
        </h2>
      )}
      {props?.episodes && (
        <h2 className={styles.showcaseItem}>
          {' '}
          Total Episodes :
          {' '}
          {props?.episodes?.length}
        </h2>
      )}
    </div>
  );
}

export default Hero;
