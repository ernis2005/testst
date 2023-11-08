import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import React from 'react';

export default function Carusel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className={s.image} src={'/imgs/nesin.png'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={s.image} src={'/imgs/nesin.png'} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
