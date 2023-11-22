'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userLogin } from '@/app/store/slice/authSlice';
import Spiner from '@/components/Spiner/Spiner';
import { handleModal } from '@/app/store/slice/modalSlice';

export default function Login() {
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const { loading, error, isUser } = useSelector((state) => state.auth);
  const { modal } = useSelector((state) => state.modal);
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error.data.detail}</p>}
      <div className={s.login}>
        <form action="" onSubmit={handleSubmit(submitForm)}>
          <div className={s.input}>
            <label htmlFor="tel">Номер телефона</label>
            <InputMask
              className={s.tel}
              {...register('login', {
                required: 'Поле обязателно к заполнина',
              })}
              mask="+996 (___) ___-___"
              placeholder="+996"
              replacement={{ _: /\d/ }}
            />
            {errors && <p style={{ color: 'red' }}>{errors?.login?.message}</p>}
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
          <button
            style={{
              opacity: isValid ? '1' : '0.6',
            }}
            type="submit"
            className={s.button}
          >
            <span> {loading ? <Spiner /> : 'Войти'} </span>
          </button>
        </form>
      </div>
    </>
  );
}
