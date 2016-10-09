import React from 'react'
import style from './style.css'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className={style.videoLoader}>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <figure className={style.videoDetail}>
      <div className={style.videoWrapper}>
        <iframe className={style.videoIframe} src={url}></iframe>
      </div>  
      <figcaption className={style.videoCaption}>
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </figcaption>
    </figure>
  )
}


export default VideoDetail
