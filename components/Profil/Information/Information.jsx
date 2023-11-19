import React from 'react';
import s from './page.module.scss';

export default function Information() {
  return (
    <>
      <div className={s.title}>
        <h2>Персональные данные</h2>
        <ul className={s.information}>
          <li>
            <span>Ф.И.О.:</span>
            <p>Jane Doe</p>
          </li>
          <li>
            <span>Номер телефона:</span>
            <p>+996 (555) 555 555</p>
          </li>
          <li>
            <span>Должность:</span>
            <p>Оператор</p>
          </li>
          <li>
            <span>Дата регистрации:</span>
            <p>
              12.12.2023 г. <span>20:13</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
