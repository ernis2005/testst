'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Register from '../Form/Redister/Register';
import Login from '../Form/Login/Login';
import Change from '../Form/Change/Change';
import Recovery from '../Form/Recovery/Recovery';
import { handleModal, handleTabClick } from '@/app/store/slice/modalSlice';
import Confirmation from '../Form/Confirmation/Confirmation';
import ConfirSendCode from '../Form/ConfirmationSendCode/ConfirSendCode';
import { BsCheckCircle } from 'react-icons/bs';

export default function Modal() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.modal);
  const { modal } = useSelector((state) => state.modal);

  const handleTabClickModal = (index) => {
    dispatch(handleTabClick(index));
  };

  const handleCloseModal = () => {
    dispatch(handleTabClick(1));
    dispatch(handleModal(!modal));
  };
  return (
    <div className={s.modal}>
      <div className={s.blog}>
        {value === 1 || value === 2 || value === 3 ? (
          <button onClick={() => handleCloseModal()} className={s.close}>
            <RiCloseFill className={s.logo} />
          </button>
        ) : null}
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
          <>
            <Recovery />
          </>
        )}
        {value === 4 && (
          <>
            <Confirmation />
          </>
        )}

        {value === 5 && (
          <>
            <div>
              <div className={s.right}>
                <BsCheckCircle className={s.img} />
                <p>Поздравляем! Регистрация завершена</p>
              </div>
            </div>
          </>
        )}
        {value === 6 && (
          <>
            <Change />
          </>
        )}
        {value === 7 && (
          <>
            <ConfirSendCode />
          </>
        )}
      </div>
    </div>
  );
}
