import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const episodes = useSelector(state => state.episodeList.episodeList.data)
  return (
    <div>Details</div>
  )
}

export default Details