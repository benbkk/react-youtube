import React from 'react'
import style from './style.css'

const Spinner = () =>
  <div className={style.Spinner}>
    <div className={style.bounceOne}></div>
    <div className={style.bounceTwo}></div>
    <div className={style.bounceThree}></div>
  </div>

export default Spinner
