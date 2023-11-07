import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Imgs from '../../../public/imgs/newscard.png'


export default function NewCards() {
  return (
    <div className={s.news_card}>
      <Image objectFit='cover' className={s.image} src={Imgs} alt="" />
      <div className={s.title}>
        <div className={s.data}>
          <p>03.04.2023</p>
          <Link className={s.link} href="#">
            Читать полностью
            <FiArrowUpRight className={s.logo} />
          </Link>
        </div>
        <h4>Lorem ipsum dolor sit amet amet, consectetur adipiscing elit. </h4>
      </div>
    </div>
  )
}
