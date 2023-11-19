import React from 'react';
import s from './page.module.scss';

export default function Paginate() {
  return (
    <div className={s.paginate}>
      <div className={s.wrapper}>
        <button>Prev</button>
        <ul>
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
        </ul>
        <button>Next</button>
      </div>
    </div>
  );
}
