'use client';
import React, { useEffect, useState } from 'react';
import s from './page.module.scss';
import Image from 'next/legacy/image';
import user from '../../../public/imgs/user.png';
import { CiUser } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import Information from '@/components/Profil/Information/Information';
import History from '../../../components/Profil/History/Histopy';
import { handleProfil } from '@/app/store/slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '@/app/getData/getData';
import TestJS from '../../../components/Test/Test'
export default function ProfilPage() {
  const data = fetchHistory();
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { profil } = useSelector((state) => state.modal);

  const handleOnClick = (index) => {
    dispatch(handleProfil(index));
  };
  useEffect(() => {
    if (edit) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [edit]);

  return (
    <>
    <TestJS/>
    <div className={s.profil}>

    <div className="container">

      <div className={s.wrapper}>
        <div className={s.user}>
          <div className={s.card}>
            <div className={s.image}>
              <Image src={user} alt="" />
            </div>
            <div>
              <h2>Jane Doe</h2>
              <button className={s.button}>Сменить фото</button>
            </div>
          </div>
          <button onClick={() => handleOnClick(1)} className={s.btn}>
            <svg
              className={s.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.33398 23.9993C5.33398 22.5849 5.89589 21.2283 6.89608 20.2281C7.89628 19.2279 9.25283 18.666 10.6673 18.666H21.334C22.7485 18.666 24.105 19.2279 25.1052 20.2281C26.1054 21.2283 26.6673 22.5849 26.6673 23.9993C26.6673 24.7066 26.3864 25.3849 25.8863 25.885C25.3862 26.3851 24.7079 26.666 24.0007 26.666H8.00065C7.29341 26.666 6.61513 26.3851 6.11503 25.885C5.61494 25.3849 5.33398 24.7066 5.33398 23.9993Z"
                stroke="#161616"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
              <path
                d="M16 13.333C18.2091 13.333 20 11.5421 20 9.33301C20 7.12387 18.2091 5.33301 16 5.33301C13.7909 5.33301 12 7.12387 12 9.33301C12 11.5421 13.7909 13.333 16 13.333Z"
                stroke="#161616"
                stroke-width="2.5"
              />
            </svg>
            <span>Мой профиль</span>
          </button>
          <button onClick={() => handleOnClick(2)} className={s.btn}>
            <svg
              className={s.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M26.6 28C23.8222 28 21.0778 27.3942 18.3667 26.1827C15.6556 24.9711 13.1889 23.2547 10.9667 21.0333C8.74445 18.8111 7.028 16.3444 5.81733 13.6333C4.60667 10.9222 4.00089 8.17778 4 5.4C4 5 4.13333 4.66667 4.4 4.4C4.66667 4.13333 5 4 5.4 4H10.8C11.1111 4 11.3889 4.10578 11.6333 4.31733C11.8778 4.52889 12.0222 4.77867 12.0667 5.06667L12.9333 9.73333C12.9778 10.0889 12.9667 10.3889 12.9 10.6333C12.8333 10.8778 12.7111 11.0889 12.5333 11.2667L9.3 14.5333C9.74444 15.3556 10.272 16.1498 10.8827 16.916C11.4933 17.6822 12.1658 18.4213 12.9 19.1333C13.5889 19.8222 14.3111 20.4613 15.0667 21.0507C15.8222 21.64 16.6222 22.1787 17.4667 22.6667L20.6 19.5333C20.8 19.3333 21.0613 19.1831 21.384 19.0827C21.7067 18.9822 22.0231 18.9547 22.3333 19L26.9333 19.9333C27.2444 20.0222 27.5 20.1836 27.7 20.4173C27.9 20.6511 28 20.912 28 21.2V26.6C28 27 27.8667 27.3333 27.6 27.6C27.3333 27.8667 27 28 26.6 28ZM8.03333 12L10.2333 9.8L9.66667 6.66667H6.7C6.81111 7.57778 6.96667 8.47778 7.16667 9.36667C7.36667 10.2556 7.65556 11.1333 8.03333 12ZM19.9667 23.9333C20.8333 24.3111 21.7169 24.6111 22.6173 24.8333C23.5178 25.0556 24.4231 25.2 25.3333 25.2667V22.3333L22.2 21.7L19.9667 23.9333Z"
                fill="#161616"
              />
            </svg>
            <span>Звонки</span>
          </button>
          <button onClick={() => setEdit(!edit)} className={s.btn}>
            <svg
              className={s.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M20 16.0007H8M8 16.0007L10.6667 18.6673M8 16.0007L10.6667 13.334"
                stroke="#161616"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 29.311C13.9293 29.2483 12.6933 29.0177 11.8387 28.1617C10.8133 27.1377 10.6853 25.567 10.6693 22.667M21.3333 29.331C24.2333 29.315 25.804 29.187 26.828 28.1617C28 26.991 28 25.1043 28 21.3337V10.667C28 6.89633 28 5.00966 26.828 3.83899C25.6573 2.66699 23.7707 2.66699 20 2.66699H18.6667C14.8947 2.66699 13.0093 2.66699 11.8387 3.83899C10.8133 4.86299 10.6853 6.43366 10.6693 9.33366M4 12.667V19.3337C4 22.4763 4 24.047 4.976 25.0243C5.952 26.0003 7.524 26.0003 10.6667 26.0003M4.976 6.97633C5.952 6.00033 7.524 6.00033 10.6667 6.00033"
                stroke="#161616"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
            <span>Выйти</span>
          </button>
        </div>
        {profil === 1 && <Information />}
        {profil === 2 && <History />}
        {edit && (
          <div className={s.exit}>
            <div className={s.title}>
              <p>Вы действительно хотите выйти?</p>
              <div className={s.btn}>
                <button>Да</button>
                <button onClick={() => setEdit(!edit)}>Нет</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
    </>
  
  );
}
