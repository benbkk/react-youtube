import React from 'react'
import style from './style.css'

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return(
    <li className={style.videoListItem}>
      <figure className={style.videoListMedia}>
        <img className={style.mediaObject} src={imageUrl} />
        <figcaption className={style.videoDetail}>
          <h3>{video.snippet.title}</h3>
        </figcaption>
      </figure>
    </li>
  )
}


export default VideoListItem
