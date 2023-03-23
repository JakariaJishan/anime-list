import React, { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEpisode } from '../redux/Anime-list/episodeSlice';
import styles from '../style/Details.module.css';
import DisplayEpisodes from './DisplayEpisodes';
import Hero from './Hero';

function Details() {
  const { id } = useParams();
  const episodes = useSelector((state) => state.episodeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisode(id));
  }, [dispatch, id]);

  return (
    <>
      <Hero episodes={episodes.episodeList.data} />
      <div className={styles.details}>
        {episodes.episodeList.data?.map((episode) => (
          <DisplayEpisodes key={episode.mal_id} episode={episode} />
        ))}
        {
          episodes.episodeList.data?.length === 0 && <p className={styles.noE}>No Episode Found!</p>
        }
        {
          !episodes.loading && (
          <Circles
            height="80"
            width="80"
            color="#F95091"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
            visible
          />
          )
        }
      </div>
    </>
  );
}

export default Details;
