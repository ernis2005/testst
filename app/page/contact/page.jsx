import React from 'react';
import s from './page.module.scss';
export const metadata = {
  title: 'Контакты',
  description: '',
  icons: [
    {
      rel: "icon",
      sizes: "any",
      url: "/logo.jpg",
    },
  ],
}

export default function ContactPage() {
  return (
    <div>
      <div className="container">
        <div className={s.contact}>
          <h2>Контакты</h2>
          <div className={s.blog}>
            <p>
              <span></span>
              <span>
                Quis fringilla convallis et vitae volutpat at porttitor. Est
                tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
                aliquet in.
              </span>
            </p>
            <iframe
              className={s.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6339980505554!2d74.58391327603604!3d42.859460803404865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99f10d3e9f1%3A0xd8ae1cafa61a6ea6!2z0KTQuNC70L7RgNC90Y7QvNC-0L3QuNGP!5e0!3m2!1sru!2skg!4v1696498751488!5m2!1sru!2skg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={s.wrapper}>
            <div className={s.card}>
              <h5>Адрес:</h5>
              <p>720017, г. Бишкек, ул. Боконбаева, 191;</p>
            </div>
            <div className={s.card}>
              <h5>Режим работы:</h5>
              <p>Пн — Пт: с 8.30 до 17.00 / Сб-Вс: выходной;</p>
            </div>
            <div className={s.card}>
              <h5>Телефон:</h5>
              <p>+996 (312) 35 33 81; +996 (312) 35 33 83;</p>
            </div>
            <div className={s.card}>
              <h5>Факс:</h5>
              <p>+996 (312) 35 33 73;</p>
            </div>
            <div className={s.card}>
              <h5>E-mail:</h5>
              <p>erc@elcat.kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
