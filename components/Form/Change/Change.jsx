'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';
import { handleTabClick } from '@/app/store/slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeFirtch } from '@/app/store/slice/changeSlice';
import Spiner from '@/components/Spiner/Spiner';

export default function Change() {
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const { loading, error } = useSelector((state) => state.change);
  const { phone } = useSelector((state) => state.cod);
  const [result, setResult] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };
  const eye2Funtion = (e) => {
    e.preventDefault();
    setEye2(!eye2);
  };

  const changeOnclick = (data) => {
    if (data.password === data.confirmPassword) {
      dispatch(changeFirtch({ ...phone, password: data.password }));
    } else {
      setResult('error');
    }
  };

  const handleBack = () => {
    dispatch(handleTabClick(7));
  };

  return (
    <div className={s.change}>
      <button onClick={handleBack} className={s.btn}>
        <FaChevronLeft className={s.logo} />
        <span>Поменять пароль</span>
      </button>
      <form action="" onSubmit={handleSubmit(changeOnclick)}>
        <div className={s.input}>
          <label htmlFor="password">Повторите пароль</label>
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
          <div className={s.password}>
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
          type="submit"
          className={s.button}
        >
          <span>{loading ? <Spiner /> : 'Сохранить'}</span>
        </button>
      </form>
    </div>
  );
}
