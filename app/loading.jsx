import React from 'react'
import s from './loadong.module.scss'
const loading = () => {
  return (
    <div  className={s.loading}>
      <div> 
      <p> loader</p>
      <span className={s.loader}></span>
      </div>
    </div>
  )
}

export default loading
