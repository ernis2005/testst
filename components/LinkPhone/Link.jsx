import React from 'react';
import s from './page.module.scss';
import { MdLocalPhone } from 'react-icons/md';

export default function Link() {
  return (
    <div>
      <Link href="/page/videochat" className={s.link}>
        <MdLocalPhone className={s.logo} />
      </Link>
    </div>
  );
}
