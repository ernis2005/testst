import React from 'react';
import s from './page.module.scss';
import { useSelector } from 'react-redux';

export default function Information() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className={s.title}>
        <h2>Персональные данные</h2>
        <ul className={s.information}>
          <li>
            <span>Ф.И.О.:</span>
            <p>{userInfo?.full_name}</p>
          </li>
          <li>
            <span>Номер телефона:</span>
            <p>{userInfo?.phone}</p>
          </li>
          <li>
            <span>Должность:</span>
            <p>{userInfo?.role}</p>
          </li>
          {/* <li>
            <span>Дата регистрации:</span>
            <p>
              12.12.2023 г. <span>20:13</span>
            </p>
          </li> */}
        </ul>
      </div>
    </>
  );
}
