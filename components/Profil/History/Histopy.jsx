'use client';
import React, { useEffect, useState } from 'react';
import s from './page.module.scss';
import { GrNext } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/legacy/image';
import user from '../../../public/imgs/user.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchHistory } from '@/app/getData/getData';
import { historyData } from '@/app/store/slice/historySlice';
import { useDispatch } from 'react-redux';

export default function Histopy() {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [calender, setCalender] = useState(false);
  const [calender2, setCalender2] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyData());
  }, []);

  const data = fetchHistory();
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
                  <span>ОТ:</span> <span>{formatDate(date)}</span> <GrNext />
                </button>
                {calender && (
                  <div className={s.calendar}>
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
                  <span>ДО:</span> <span>{formatDate(date2)}</span> <GrNext />
                </button>
                {calender2 && (
                  <div className={s.calendar}>
                    <Calendar
                      className={s.cal}
                      onChange={handleDateChange2}
                      value={date}
                    />
                  </div>
                )}
              </li>
              <li>
                <button>
                  <IoMdClose className={s.close} />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.wrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, , 9, 10].map((e) => {
            return (
              <div key={e} className={s.card}>
                <div className={s.blog}>
                  <div className={s.img}>
                    <Image src={user} alt="" />
                  </div>
                  <div className={s.title}>
                    <h3>Атай Аланов</h3>
                    <p>00:20:13</p>
                  </div>
                </div>
                <p className={s.date}>
                  <span>12.02.2023</span>
                  <span>20:13</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
