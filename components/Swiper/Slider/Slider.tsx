
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import s from './page.module.scss'
import { GrNext, GrPrevious } from 'react-icons/gr'


const user = [
  {
    id: 1,
    title: 'Айнуска Бекболотова',
    img: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    text: 'Art-Director'
  },
  {
    id: 2,
    title: 'Нурсултан Жумашов',
    img: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
    text: 'Art-Director'
  },
  {
    id: 3,
    title: 'Аблай Касымов',
    img: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
    text: 'Art-Director'
  },
  {
    id: 4,
    title: 'Айнуска Бекболотова',
    img: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    text: 'Art-Director'
  },
  {
    id: 5,
    title: 'Айнуска Бекболотова',
    img: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
    text: 'Art-Director'
  }
]

export default function Slider() {
  return (
    <div className={s.slide}>
      <div className=''>
        <div className={s.slide_title}>
          <h2>Наша команда</h2>
          <div className={s.btn}>
            <button className='prev'>
              <GrPrevious className={s.logo} />
            </button>
            <button className='next'>
              <GrNext className={s.logo} />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={{
          425: {
            slidesPerView: 1.7,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {user.map((e) => {
          return (
            <SwiperSlide>
              <div style={{
                backgroundImage: `url(${e.img})`
              }} className={s.card}>
                <div className={s.hover}>
                  <div className={s.text}>
                    <p>Art-Director</p>
                    <h2>
                      Айнуска<br />
                      <span>Бекболотова</span>
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>


  )
}
