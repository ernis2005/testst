import React from 'react';
import s from './page.module.scss';
import Image from 'next/legacy/image';
import { FaEye } from 'react-icons/fa';
import Images from '../../../../public/imgs/newscard.png';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import noneImage from '../../../../public/imgs/noneImage.png';

import { fetchNews, fetchNewsIn } from '@/app/getData/getData';
import NewsPage from '@/components/NewsPage/NewsPage';

export default async function NewsIn({ params: { id } }) {
  const dataNewsIn = await fetchNewsIn(id);
  const data = await fetchNews();

  let datas = data.results;
  datas = datas.slice(0, 2);
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={s.news_in}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.cards}>
            <h2>{dataNewsIn.thesis}</h2>
            <div className={s.card}>
              <div className={s.slide}>
                {dataNewsIn.images_slides.length > 0 ? (
                  <NewsPage image={dataNewsIn.images_slides} />
                ) : (
                  <Image width={1000} height={500} src={noneImage} alt="" />
                )}
              </div>
              <div className={s.title}>
                <h5>{formatDate(dataNewsIn.created_at)}</h5>
                <p>
                  <FaEye className={s.logo} />
                  <span>
                    {dataNewsIn.views}
                    просмотра
                  </span>
                </p>
              </div>
              <p>{dataNewsIn.description}</p>
            </div>
          </div>
          <div className={s.card_wrapper}>
            <h2>More articles</h2>
            <div className={s.blog}>
              {datas.map((e) => {
                return (
                  <div key={e} className={s.news_card}>
                    <div className={s.image}>
                      {e.images_slides.length > 0 ? (
                        <Image
                          objectFit="cover"
                          width={500}
                          height={250}
                          src={e.images_slides[0].photo}
                          alt=""
                        />
                      ) : (
                        <Image
                          objectFit="cover"
                          width={500}
                          height={250}
                          src={noneImage}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={s.title}>
                      <div className={s.data}>
                        <p>{formatDate(e.created_at)}</p>
                        <Link className={s.link} href={`${e.id}`}>
                          Читать полностью
                          <FiArrowUpRight className={s.logo} />
                        </Link>
                      </div>
                      <h4>{e.thesis}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <button>
              <span>More</span>
              <FiArrowUpRight className={s.logo} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
