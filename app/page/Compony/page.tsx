
import React, { useRef, useState } from 'react';
import s from './page.module.scss'
import Image from 'next/image'
import Com from '../../../public/imgs/com.png'
import Com2 from '../../../public/imgs/hero.png'
import Slider from '@/components/Swiper/Slider/Slider';


const data = [
  {
    id: 1,
    title: 'Lorem Ipsum has been',
    number: '30',
    text: '+'

  },
  {
    id: 2,
    title: 'Lorem Ipsum has been',
    number: '200',
    text: 'k+'

  },
  {
    id: 3,
    title: 'Lorem Ipsum has been',
    number: '5000',
    text: ''
  },
  {
    id: 4,
    title: 'Lorem Ipsum has been',
    number: '500',
    text: '+'
  }
]
const logo = [
  {
    id: 1,
    img: '/imgs/bmw.png',
    title: 'BMW'
  },
  {
    id: 2,
    img: '/imgs/tesla.png',
    title: 'TESLA'
  },
  {
    id: 3,
    img: '/imgs/apple.png',
    title: 'APPLE'
  },
  {
    id: 4,
    img: '/imgs/bmw.png',
    title: 'BMW'
  },
  {
    id: 5,
    img: '/imgs/toyota.png',
    title: 'TOYOTA'
  },

  {
    id: 6,
    img: '/imgs/bmw.png',
    title: 'BMW'
  },
  {
    id: 7,
    img: '/imgs/tesla.png',
    title: 'TESLA'
  },

  {
    id: 8,
    img: '/imgs/porsche.png',
    title: 'PORSCHE'
  },

]
export default function ComponyPage() {
  return (
    <div>
      <div className='container'>
        <div className={s.hero}>
          <div className={s.title}>
            <h2>Dui sapien aliquet aliquam</h2>
            <p>
              Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in.
            </p>
          </div>
          <Image src={Com} alt="" />
        </div>
        <div className={s.blog}>
          {data.map((e) => {
            return (
              <div key={e.id} className={s.card}>
                <p>{e.title}</p>
                <h2>{e.number}<span>{e.text}</span></h2>
              </div>
            )
          })}
        </div>
        <div className={s.deaf}>
          <div className={s.text}>
            <Image className={s.image} src={Com2} objectFit='cover' alt="" />
            <div className={s.wrapper}>
              {logo.map((e) => {
                return (
                  <div key={e.id} className={s.card}>
                    <Image width={100} height={100} className={s.card_img} src={e.img} alt="" />
                    <p>{e.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={s.title}>
            <h2>Кыргызское общество слепых и глухих</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Slider />
      </div>
    </div>
  )
}
