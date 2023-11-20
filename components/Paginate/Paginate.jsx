// 'use client';
// import React, { useEffect, useState } from 'react';
// import s from './page.module.scss';
// import { fetchNews } from '@/app/getData/getData';
// import { useDispatch } from 'react-redux';

// export default function Paginate() {
//   // const [noOFElement, setNoOFElement] = useState(6);
//   // const datas = [1, 2, 3, 4, 5, 67, 8, 9, 0];
//   // const slice = data?.slice(0, noOFElement);
//   // const data4length = datas.length;
//   // const LoadMore = () => {
//   //   setNoOFElement(noOFElement + 6);
//   // };
//   // <button onClick={() => LoadMore()} className={cm(s.button)}>
//   //   Смотреть еще
//   // </button>;
//   return (
//     <div className={s.paginate}>
//       <div className={s.wrapper}>
//         <button>Prev</button>
//         <ul>
//           <li>01</li>
//           <li>02</li>
//           <li>03</li>
//           <li>04</li>
//           <li>05</li>
//         </ul>
//         <button>Next</button>
//       </div>
//     </div>
//   );
// }
'use client';
import { fetchNews } from '@/app/getData/getData';
import React, { useState } from 'react';

export default function Paginate() {
  const data = fetchNews();

  const [currentPage, setCurrentPage] = useState(1);

  const newsPerPage = 2;
  console.log(data);

  const news = data || [];
  console.log(news);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  // const currentNews = newsd.slice(indexOfFirstNews, indexOfLastNews);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [active, setActive] = useState(currentPage);
  const getItemProps = (index) => ({
    variant: active === index ? 'filled' : 'text',
    color: active === index ? 'gray' : '#000',

    onClick: () => {
      setActive(index);
      paginate(index);
    },
  });
  const next = () => {
    if (active === Math.ceil(totalNews / newsPerPage)) return;
    setActive(active + 1);
    paginate(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    paginate(active - 1);
  };

  return (
    <div>
      {/* <div className="flex items-center gap-4">
        <button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          Prevs
          // {/* <GrFormPrevious strokeWidth={2} className="h-6 w-6" /> 
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: Math.ceil(totalNews / newsPerPage) }).map(
            (_, index) => (
              <div className="" key={index} {...getItemProps(index + 1)}>
                <span className="">{index + 1}</span>
              </div>
            ),
          )}
        </div>
        <button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === Math.ceil(totalNews / newsPerPage)}
        >
          next
          <GrFormNext strokeWidth={2} className="h-6 w-6" />
        </button>
      </div> */}
    </div>
  );
}
