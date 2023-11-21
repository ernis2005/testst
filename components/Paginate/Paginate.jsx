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
              Prev
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
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';
// import { fetchNews } from '@/app/getData/getData';
// import React, { useState } from 'react';

// export default function Paginate() {
//   const data = fetchNews();

//   const [currentPage, setCurrentPage] = useState(1);

//   const newsPerPage = 2;
//   console.log(data);

//   const news = data || [];
//   console.log(news);

//   const indexOfLastNews = currentPage * newsPerPage;
//   const indexOfFirstNews = indexOfLastNews - newsPerPage;
//   // const currentNews = newsd.slice(indexOfFirstNews, indexOfLastNews);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const [active, setActive] = useState(currentPage);
//   const getItemProps = (index) => ({
//     variant: active === index ? 'filled' : 'text',
//     color: active === index ? 'gray' : '#000',

//     onClick: () => {
//       setActive(index);
//       paginate(index);
//     },
//   });
//   const next = () => {
//     if (active === Math.ceil(totalNews / newsPerPage)) return;
//     setActive(active + 1);
//     paginate(active + 1);
//   };

//   const prev = () => {
//     if (active === 1) return;
//     setActive(active - 1);
//     paginate(active - 1);
//   };

//   return (
//     <div>
//       {/* <div className="flex items-center gap-4">
//         <button
//           variant="text"
//           className="flex items-center gap-2"
//           onClick={prev}
//           disabled={active === 1}
//         >
//           Prevs
//           // {/* <GrFormPrevious strokeWidth={2} className="h-6 w-6" />
//         </button>
//         <div className="flex items-center gap-2">
//           {Array.from({ length: Math.ceil(totalNews / newsPerPage) }).map(
//             (_, index) => (
//               <div className="" key={index} {...getItemProps(index + 1)}>
//                 <span className="">{index + 1}</span>
//               </div>
//             ),
//           )}
//         </div>
//         <button
//           variant="text"
//           className="flex items-center gap-2"
//           onClick={next}
//           disabled={active === Math.ceil(totalNews / newsPerPage)}
//         >
//           next
//           <GrFormNext strokeWidth={2} className="h-6 w-6" />
//         </button>
//       </div> */}
//     </div>
//   );
// }
