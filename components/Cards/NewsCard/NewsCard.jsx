import React from 'react';
import s from './page.module.scss';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import News from '../../../public/imgs/news.png';
import noneImage from '../../../public/imgs/noneImage.png';

export default function NewsCard({ news }) {


  return (
    <div className={s.card}>
      <div>
        {news.images_slides.length > 0 ? (
          <Image
            width={482}
            height={260}
            src={news.images_slides[0].photo}
            alt=""
          />
        ) : (
          <Image width={482} height={260} src={noneImage} alt="" />
        )}
      </div>
      <div className={s.card_wrapper}>
        <div className={s.title}>
          <h2>{news.thesis.slice(0, 15)}</h2>
          <p>{news.description.slice(0, 35)}...</p>
        </div>
        <Link className={s.link} href={`page/news/${news.id}`}>
          <FiArrowUpRight className={s.logo} />
        </Link>
      </div>
    </div>
  );
}
