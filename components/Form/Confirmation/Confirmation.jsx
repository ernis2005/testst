import React from 'react';
import s from './page.module.scss';

export default function Confirmation() {
  return (
    <div>
      <div className={s.confirmation}>
        <button className={s.link}>
          <span>Потверждение номера телефона</span>
        </button>
        <p>
          На ваш номер +996(559)****33 был отправлен код. Он нужен для
          потверждения вашей личности
        </p>
        <form action=""></form>
      </div>
    </div>
  );
}
