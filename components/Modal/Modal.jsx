'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

export default function Modal({ modal, setModal }) {
  const [eye, setEye] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className={s.modal}>
      <div className={s.blog}>
        <button onClick={() => setModal(!modal)} className={s.close}>
          <RiCloseFill className={s.logo} />
        </button>
        {activeTab !== 3 && (
          <div className={s.btn}>
            <button
              className={activeTab === 1 ? `${s.active}` : ''}
              onClick={() => handleTabClick(1)}
            >
              Войти
            </button>
            <button
              className={activeTab === 2 ? `${s.active}` : ''}
              onClick={() => handleTabClick(2)}
            >
              Зарегистрироваться
            </button>
          </div>
        )}

        {activeTab === 1 && (
          <div className={s.login}>
            <form action="">
              <div className={s.input}>
                <label htmlFor="tel">Номер телефона</label>
                <InputMask
                  className={s.tel}
                  mask="+996 (___) ___-___"
                  placeholder="+996"
                  replacement={{ _: /\d/ }}
                />
              </div>
              <div className={s.input}>
                <label htmlFor="password">Пароль</label>
                <div className={s.password}>
                  <input
                    className={s.pass}
                    placeholder="Введите ваш пароль"
                    type={eye ? 'text' : 'password'}
                  />
                  <button onClick={eyeFuntion}>
                    {eye ? (
                      <AiOutlineEye className={s.logo} />
                    ) : (
                      <AiOutlineEyeInvisible className={s.logo} />
                    )}
                  </button>
                </div>
              </div>
            </form>
            <button className={s.button}>
              <span>Войти</span>
            </button>
            <button onClick={() => handleTabClick(3)} className={s.link}>
              <span>Забыли пароль?</span>
            </button>
          </div>
        )}

        {activeTab === 2 && (
          <div className={s.register}>
            <form>
              <div className={s.wrapper}>
                <label htmlFor="text">ФИО</label>
                <input type="text" placeholder="Введите ФИО" />
              </div>
              <div className={s.wrapper}>
                <label htmlFor="tel">Номер телефона</label>
                <InputMask
                  className={s.tel}
                  mask="+996 (___) ___-___"
                  placeholder="+996"
                  replacement={{ _: /\d/ }}
                />
              </div>
              <div className={s.wrapper}>
                <label htmlFor="text">Пароль</label>
                <input type="text" placeholder="Введите ваш пароль" />
              </div>
              <div className={s.wrapper}>
                <label htmlFor="text">Повторите пароль</label>
                <input type="text" placeholder="Повторите пароль" />
              </div>
            </form>
            <button className={s.button}>
              <span>Зарегистрироваться</span>
            </button>
          </div>
        )}

        {activeTab === 3 && (
          <div className={s.recovery}>
            <button className={s.link}>
              <span>Восстановление пароля</span>
            </button>
            <p>
              Для восстановления пароля, введите ваш номер телефона, на которую
              будет выслана ссылка для завершения восстановления доступа
            </p>
            <form action="">
              <div className={s.wrapper}>
                <label htmlFor="tel">Номер телефона</label>
                <InputMask
                  className={s.tel}
                  mask="+996 (___) ___-___"
                  placeholder="+996"
                  replacement={{ _: /\d/ }}
                />
              </div>
            </form>
            <button className={s.button}>
              <span>Получить</span>
            </button>
            <h5>
              У вас уже есть аккаунт?
              <span onClick={() => handleTabClick(1)}>Войти</span>
            </h5>
            <h5>
              У вас нет аккаунта?
              <span onClick={() => handleTabClick(2)}>Зарегистрируйтесь</span>
            </h5>
          </div>
        )}

        {activeTab === 4 && (
          <div>
            <form action=""></form>
          </div>
        )}
      </div>
    </div>
  );
}
