import React from 'react'
import style from './style.css'
import VideoListItem from '../VideoListItem'

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
        video={video} />
    )
  })
  return (
  <ul className={style.videoListUl}>
    {videoItems}
  </ul>
  )
}

export default VideoList
