import React from 'react'
import style from './style.css'

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url
  /* or const video = props.video & const onVideoSelect = props.onVideoSelect */
  return(
    <li onClick={() => onVideoSelect(video)} className={style.videoListItem}>
      <figure className={style.videoListMedia}>
        <img className={style.mediaObject} src={imageUrl} />
        <figcaption className={style.videoDetail}>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </figcaption>
      </figure>
    </li>
  )
}


export default VideoListItem
