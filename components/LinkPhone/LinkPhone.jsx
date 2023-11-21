'use client';
import React from 'react';
import s from './page.module.scss';
import { MdLocalPhone } from 'react-icons/md';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { handleModal } from '../../app/store/slice/modalSlice';

export default function LinkPhone() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { modal } = useSelector((state) => state.modal);

  return (
    <div>
      {userInfo ? (
        <Link href="/page/videochat" className={s.link}>
          <MdLocalPhone className={s.logo} />
        </Link>
      ) : (
        <Link
          href="#"
          onClick={() => dispatch(handleModal())}
          className={s.link}
        >
          <MdLocalPhone className={s.logo} />
        </Link>
      )}
    </div>
  );
}
