import React from 'react'
import style from './style.css'
import Spinner from '../Spinner'

const VideoDetail = ({video}) => {
  if (!video) {
    return <Spinner /> 
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}?rel=0&vq=hd720p60" frameborder="0" allowfullscreen`
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
