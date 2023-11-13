'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userLogin } from '@/app/store/slice/authSlice';

export default function Login() {
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { loading, error, isUser } = useSelector((state) => state.auth);

  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  console.log(error);

  const submitForm = (data) => {
    if (data.password.length >= 7) {
      dispatch(userLogin(data));
    } else {
      alert('7 den kichine');
    }
  };
  return (
    <>
      <div className={s.login}>
        <form action="" onSubmit={handleSubmit(submitForm)}>
          <div className={s.input}>
            <label htmlFor="tel">Номер телефона</label>
            <InputMask
              className={s.tel}
              {...register('login')}
              mask="+996 (___) ___-___"
              placeholder="+996"
              replacement={{ _: /\d/ }}
            />
          </div>
          <div className={s.input}>
            <label htmlFor="password">Пароль</label>
            <div className={s.password}>
              <input
                {...register('password')}
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
          <button type="submit" className={s.button}>
            <span> {loading ? 'loading' : 'Войти'} </span>
          </button>
        </form>
      </div>
    </>
  );
}
