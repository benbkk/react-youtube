import React from 'react'
import style from './style.css'
import VideoListItem from '../VideoListItem'

const VideoList = props => {
  const VideoItems = props.videos.map(video => {
    return <VideoListItem video={video} key={video.etag} />
  });
  return (
  <ul className={style.videoListUl}>
    {VideoItems}
  </ul>
  )
}

export default VideoList
