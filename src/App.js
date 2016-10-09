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
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'veep'}, videos => {
      this.setState({ videos })
      // or this.setState({videos: videos})
    })
  }
  render() {
    return(
      <div className={style.container}>
        <h1 className={style.h1XL}>What would you like to watch today?</h1>
        <SearchBar />
        <div className={style.mainContent}>
          <VideoDetail video={this.state.videos[0]} />
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    )
  }
}
