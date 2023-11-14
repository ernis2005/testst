'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userLogin } from '@/app/store/slice/authSlice';
import Register from '../Form/Redister/Register';
import Login from '../Form/Login/Login';
import { handleTabClick } from '@/app/store/slice/modalSlice';
import Confirmation from '../Form/Confirmation/Confirmation';

export default function Modal({ modal, setModal }) {
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { value } = useSelector((state) => state.modal);

  const { loading, error, isUser } = useSelector((state) => state.auth);
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  if (isUser) {
    setModal(!modal);
  }
  const handleTabClickModal = (index) => {
    dispatch(handleTabClick(index));
  };

  const handleCloseModal = () => {
    dispatch(handleTabClick(1));
    setModal(!modal);
  };

  return (
    <div className={s.modal}>
      <div className={s.blog}>
        <button onClick={() => handleCloseModal()} className={s.close}>
          <RiCloseFill className={s.logo} />
        </button>
        {(value === 1 || value == 2) && (
          <div className={s.btn}>
            <button
              className={value === 1 ? `${s.active}` : ''}
              onClick={() => handleTabClickModal(1)}
            >
              Войти
            </button>
            <button
              className={value === 2 ? `${s.active}` : ''}
              onClick={() => handleTabClickModal(2)}
            >
              Зарегистрироваться
            </button>
          </div>
        )}
        {error && <p className={s.error}>{error}</p>}
        {value === 1 && (
          <>
            <Login />
            <button onClick={() => handleTabClickModal(3)} className={s.link}>
              <span>Забыли пароль?</span>
            </button>
          </>
        )}
        {value === 2 && (
          <>
            <Register />
          </>
        )}

        {value === 3 && (
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
              <span onClick={() => handleTabClickModal(1)}>Войти</span>
            </h5>
            <h5>
              У вас нет аккаунта?
              <span onClick={() => handleTabClickModal(2)}>
                Зарегистрируйтесь
              </span>
            </h5>
          </div>
        )}
        {value === 4 && (
          <>
            <Confirmation />
          </>
        )}
        {value === 5 && <div>Поздравляем! Регистрация завершена</div>}
      </div>
    </div>
  );
}
