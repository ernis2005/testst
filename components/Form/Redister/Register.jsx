'use client';
import React, { useEffect, useState } from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '@/app/store/slice/registerSlice';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Spiner from '@/components/Spiner/Spiner';

export default function Register() {
  const [customError, setCustomError] = useState(null);
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.signup);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const submitRegister = (data) => {
    if (data.password === data.confirmPassword) {
      dispatch(registerUser(data));
    } else {
      setCustomError('Пароли не совпадают');
    }
  };
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  const eye2Funtion = (e) => {
    e.preventDefault();
    setEye2(!eye2);
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error.Сообщение}</p>}
      {customError && <p style={{ color: 'red' }}>{customError}</p>}
      <div className={s.register}>
        <form onSubmit={handleSubmit(submitRegister)}>
          <div className={s.wrapper}>
            <label htmlFor="text">ФИО</label>
            <input
              {...register('full_name', {
                required: 'Поле обязателно к заполнина',
              })}
              type="text"
              placeholder="Введите ФИО"
            />
            {errors && (
              <p style={{ color: 'red' }}>{errors?.full_name?.message}</p>
            )}
          </div>
          <div className={s.wrapper}>
            <label htmlFor="tel">Номер телефона</label>
            <InputMask
              {...register('phone', {
                required: 'Поле обязателно к заполнина',
              })}
              className={s.tel}
              mask="+996 (___) ___-___"
              placeholder="+996"
              replacement={{ _: /\d/ }}
            />
            {errors && <p style={{ color: 'red' }}>{errors?.phone?.message}</p>}
          </div>
          <div className={s.input}>
            <label htmlFor="password">Пароль</label>
            <div className={s.password}>
              <input
                {...register('password', {
                  required: 'Поле обязателно к заполнина',
                  minLength: {
                    value: 7,
                    message: 'Минимум 7 символов',
                  },
                })}
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
            {errors && (
              <p style={{ color: 'red' }}>{errors?.password?.message}</p>
            )}
          </div>
          <div className={s.input}>
            <label htmlFor="password">Повторите пароль</label>
            <div
              style={{
                border: customError === null ? '' : '1px solid red',
              }}
              className={s.password}
            >
              <input
                {...register('confirmPassword', {
                  required: 'Поле обязателно к заполнина',
                  minLength: {
                    value: 7,
                    message: 'Минимум 7 символов',
                  },
                })}
                className={s.pass}
                placeholder="Повторите пароль"
                type={eye2 ? 'text' : 'password'}
              />
              <button onClick={eye2Funtion}>
                {eye2 ? (
                  <AiOutlineEye className={s.logo} />
                ) : (
                  <AiOutlineEyeInvisible className={s.logo} />
                )}
              </button>
            </div>
            {errors && (
              <p style={{ color: 'red' }}>{errors?.confirmPassword?.message}</p>
            )}
          </div>
          <button
            style={{
              opacity: isValid ? '1' : '0.6',
            }}
            className={s.button}
          >
            <span> {loading ? <Spiner /> : 'Зарегистрироваться'} </span>
          </button>
        </form>
      </div>
    </>
  );
}
