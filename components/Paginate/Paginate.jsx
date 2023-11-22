'use client';
import React, { useEffect, useState } from 'react';
import s from './page.module.scss';
import NewCards from '../Cards/NewCards/NewCards';

export default function Paginate({ newsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 2;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);
  const npage = Math.ceil(newsData.length / newsPerPage);
  const paginate = [...Array(npage + 1).keys()].slice(1);

  const getItemProps = (index) => setCurrentPage(index);
  const next = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage !== 1) {
      console.log();
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className={s.cards}>
        <h2>More articles</h2>
        <div className={s.wrapper}>
          {currentNews.map((news) => {
            return <NewCards news={news} />;
          })}
        </div>
        <div className={s.paginate}>
          <div className={s.pag_wrapper}>
            <button
              style={{
                opacity: currentPage === 1 ? '0.5' : '',
              }}
              onClick={prev}
            >
              Назад
            </button>
            <ul>
              {paginate.map((n) => {
                return (
                  <li
                    style={{
                      backgroundColor: currentPage === n ? '#000' : '',
                      color: currentPage === n ? '#fff' : '#000',
                    }}
                    onClick={() => getItemProps(n)}
                    key={n}
                  >
                    {n}
                  </li>
                );
              })}
            </ul>
            <button
              style={{
                opacity: currentPage === npage ? '0.5' : '',
              }}
              onClick={next}
            >
              Вперёд
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
