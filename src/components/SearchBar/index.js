import React, { Component } from 'react'
import style from './style.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }
  onInputChange = event => {
    this.setState({term: event.target.value})
  }
  render() {
    return (
      <div className={style.formGroup}>
        <input
          value={this.state.term}
          className={style.formControl} onChange={this.onInputChange} placeholder="Type anything" />
        <label className={style.controlLabel}>I want to watch {this.state.term}</label>
      </div>
    )
  }
}
