import React from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { useForm } from 'react-hook-form';
import { handleTabClick } from '@/app/store/slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { sendCodeFitch } from '@/app/store/slice/sendCodeSlice';
import Spiner from '@/components/Spiner/Spiner';

export default function Recovery() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const dispatch = useDispatch();

  const handleTabClickModal = (index) => {
    dispatch(handleTabClick(index));
  };
  const { phone, loading } = useSelector((state) => state.sendCode);
  const submitSendCode = (data) => {
    dispatch(sendCodeFitch(data));
  };



  return (
    <>
      <div className={s.recovery}>
        <button className={s.link}>
          <span>Восстановление пароля</span>
        </button>
        <p>
          Для восстановления пароля, введите ваш номер телефона, на которую
          будет выслана ссылка для завершения восстановления доступа
        </p>
        <form action="" onSubmit={handleSubmit(submitSendCode)}>
          <div className={s.wrapper}>
            <label htmlFor="tel">Номер телефона</label>
            <InputMask
              className={s.tel}
              {...register('phone', {
                required: 'Поле обязателно к заполнина',
              })}
              mask="+996 (___) ___-___"
              placeholder="+996"
              replacement={{ _: /\d/ }}
            />
          </div>
          {errors && (
            <p style={{ color: 'red', textAlign: 'start' }}>
              {errors?.phone?.message}
            </p>
          )}
          <button
            style={{
              opacity: isValid ? '1' : '0.6',
            }}
            className={s.button}
          >
            <span>{loading ? <Spiner /> : 'Получить'}</span>
          </button>
        </form>
        <h5>
          У вас уже есть аккаунт?
          <span onClick={() => handleTabClickModal(1)}>Войти</span>
        </h5>
        <h5>
          У вас нет аккаунта?
          <span onClick={() => handleTabClickModal(2)}>Зарегистрируйтесь</span>
        </h5>
      </div>
    </>
  );
}
