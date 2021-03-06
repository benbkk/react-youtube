import _ from 'lodash'
import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import style from './style.css'

const API_KEY = 'AIzaSyAQU2_aewcRq77-o-9-AKqHEO-x79QAwug'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('')
  }
  videoSelect = selectedVideo => {
    this.setState({selectedVideo})
  }
  videoSearch = _.debounce(term => {
    YTSearch({key: API_KEY, term: term, maxResults: 10}, videos => {
      this.setState({
        videos: videos, // or this.setState({videos: videos})
        selectedVideo: videos[0] // so that there will always be a video shown
      })
    })
  }, 300)
  render() {
    return(
      <div className={style.container}>
        <h1 className={style.h1XL}>What do <span className={style.red}>you</span> like to <span className={style.red}>watch</span> today?</h1>

        <SearchBar onSearchTermChange={this.videoSearch} />

        <div className={style.mainContent}>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.videoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    )
  }
}
