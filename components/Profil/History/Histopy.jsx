'use client';
import React, { useEffect, useState } from 'react';
import s from './page.module.scss';
import { GrNext } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/legacy/image';
import user from '../../../public/imgs/user.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { historyData } from '@/app/store/slice/historySlice';
import { useDispatch, useSelector } from 'react-redux';
import Spiner from '@/components/Spiner/Spiner';

export default function Histopy() {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [calender, setCalender] = useState(false);
  const [calender2, setCalender2] = useState(false);
  const { history, loading } = useSelector((state) => state.history);
  const datas = history.results || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      historyData({
        created_at__gte: formatDate2(date),
        created_at__lte: date2 ? formatDate2(date2) : '2060-11-10',
      }),
    );
  }, [dispatch, date, date2]);

  const formatDate2 = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${day}.${month}.${year}`;
  };
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setCalender(false);
  };

  const handleDateChange2 = (selectedDate) => {
    setDate2(selectedDate);
    setCalender2(false);
  };

  const dateHandleClick = () => {
    setCalender(!calender);
    setCalender2(false);
  };

  const dateHandleClick2 = () => {
    setCalender(false);
    setCalender2(!calender2);
  };

  const hadleClose = () => {
    setDate(null);
    setDate2(null);
  };

  return (
    <div>
      <div className={s.history}>
        <div className={s.text}>
          <h2>История звонков</h2>
          <div className={s.link}>
            <h3>Период времени</h3>
            <ul>
              <li>
                <button onClick={dateHandleClick}>
                  <span>ОТ:</span> {date && <span>{formatDate(date)}</span>}
                  <GrNext />
                </button>
                {calender && (
                  <div onClick={dateHandleClick} className={s.calendar}>
                    <Calendar
                      className={s.cal}
                      onChange={handleDateChange}
                      value={date}
                    />
                  </div>
                )}
              </li>
              <li>
                <button onClick={dateHandleClick2}>
                  <span>ДО:</span>
                  {date2 && <span>{formatDate(date2)}</span>} <GrNext />
                </button>
                {calender2 && (
                  <div onClick={dateHandleClick2} className={s.calendar}>
                    <Calendar
                      className={s.cal}
                      onChange={handleDateChange2}
                      value={date}
                    />
                  </div>
                )}
              </li>
              <li>
                <button onClick={hadleClose}>
                  <IoMdClose className={s.close} />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Spiner />
          </div>
        ) : (
          <>
            {datas?.length > 0 ? (
              <div className={s.wrapper}>
                {datas.map((e) => {
              
                  return (
                    <div key={e} className={s.card}>
                      <div className={s.blog}>
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
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 13.333C18.2091 13.333 20 11.5421 20 9.33301C20 7.12387 18.2091 5.33301 16 5.33301C13.7909 5.33301 12 7.12387 12 9.33301C12 11.5421 13.7909 13.333 16 13.333Z"
                            stroke="#161616"
                            strokeWidth="2.5"
                          />
                        </svg>
                        <div className={s.title}>
                          <h3>{e.partner_name}</h3>
                          <p>{e.end_time?.slice(11, 19)}</p>
                        </div>
                      </div>
                      <p className={s.date}>
                        <span>{e.created_at}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <center>пусто</center>
            )}
          </>
        )}
      </div>
    </div>
  );
}
