import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import s from './page.module.scss';
import NewsImage from '../../../public/imgs/newsPost.png';
import { FiArrowUpRight } from 'react-icons/fi';
import NewCards from '@/components/Cards/NewCards/NewCards';
import { fetchNews, fetchNewsIn } from '@/app/getData/getData';

export default async function NewsPage() {
  const data = await fetchNews();
  const image = data.results[0].images_slides[0].photo;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };
  return (
    <div>
      <div className="container">
        <div className={s.news}>
          <h2>Последние новости</h2>
          <div className={s.new_card}>
            <div className={s.image}>
              <Image
                objectFit="cover"
                width={1564}
                height={500}
                src={image}
                alt=""
              />
            </div>
            <div className={s.title}>
              <h3>{data.results[0].thesis}</h3>
              <div className={s.data}>
                <p>{formatDate(data.results[0].created_at)}</p>
                <Link className={s.link} href={`news/${data.results[0].id}`}>
                  Читать полностью <FiArrowUpRight className={s.logo} />{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cards}>
          <h2>More articles</h2>
          <div className={s.wrapper}>
            {data.results?.map((news) => {
              return <NewCards news={news} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
