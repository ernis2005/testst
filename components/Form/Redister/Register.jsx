'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '@/app/store/slice/registerSlice';

export default function Register() {
  const { data, register, handleSubmit } = useForm();
  const [customError, setCustomError] = useState(null);
  const dispatch = useDispatch();
  console.log(data);

  const submitRegister = (data) => {
    // dispatch(registerUser(data));
    if (data.password === data.confirmPassword) {
      dispatch(registerUser(data));
    } else {
      setCustomError('Password mismatch');
      console.log(customError);
    }
  };
  return (
    <>
      <div className={s.register}>
        <form onSubmit={handleSubmit(submitRegister)}>
          <div className={s.wrapper}>
            <label htmlFor="text">ФИО</label>
            <input
              {...register('full_name')}
              type="text"
              placeholder="Введите ФИО"
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor="tel">Номер телефона</label>
            <InputMask
              {...register('phone')}
              className={s.tel}
              mask="+996 (___) ___-___"
              placeholder="+996"
              replacement={{ _: /\d/ }}
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor="password">Пароль</label>
            <input
              // style={{
              //   border: data >= 7 ? '#000' : 'red',
              // }}
              {...register('password')}
              type="password"
              placeholder="Введите ваш пароль"
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor="password">Повторите пароль</label>
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder="Повторите пароль"
              required
            />
          </div>
          <button className={s.button}>
            <span>Зарегистрироваться</span>
          </button>
        </form>
      </div>
    </>
  );
}
