import React from 'react';

function DisplayEpisodes({episode}) {
    const {title, url} = episode
  return (
    <div>{title}, {url}</div>
  )
}

export default DisplayEpisodes