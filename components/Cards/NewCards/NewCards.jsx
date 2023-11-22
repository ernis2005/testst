import React from 'react';
import s from './page.module.scss';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import noneImage from '../../../public/imgs/noneImage.png';

export default function NewCards({ news }) {
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };
  return (
    <div className={s.news_card}>
      <div className={s.image}>
        {news.images_slides.length > 0 ? (
          <Image
            objectFit="cover"
            width={762}
            height={494}
            src={news.images_slides[0].photo}
            alt=""
          />
        ) : (
          <Image
            objectFit="cover"
            width={762}
            height={494}
            src={noneImage}
            alt=""
          />
        )}
      </div>
      <div className={s.title}>
        <div className={s.data}>
          <p>{formatDate(news.created_at)}</p>
          <Link className={s.link} href={`News/${news.id}`}>
            Читать полностью
            <FiArrowUpRight className={s.logo} />
          </Link>
        </div>
        <h4>{news.thesis}</h4>
      </div>
    </div>
  );
}
