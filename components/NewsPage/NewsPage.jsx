'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import s from './page.module.scss';
import Image from 'next/legacy/image';
export default function NewsPage({ image }) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {image.map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={s.image}>
                <Image width={1064} height={500} src={e.photo} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
