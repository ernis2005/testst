import React from 'react';
import s from './page.module.scss';
import { InputMask } from '@react-input/mask';
import { useForm } from 'react-hook-form';
import { handleTabClick } from '@/app/store/slice/modalSlice';
import { useDispatch } from 'react-redux';

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
        <form action="">
          <div className={s.wrapper}>
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
        </form>
        <button
          style={{
            opacity: isValid ? '1' : '0.6',
          }}
          className={s.button}
        >
          <span>Получить</span>
        </button>
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
