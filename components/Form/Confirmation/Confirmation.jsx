import React, { useRef, useState } from 'react';
import s from './page.module.scss';
import AuthCode, { AuthCodeRef } from 'react-auth-code-input';
import { useDispatch, useSelector } from 'react-redux';
import { confirmationFetch } from '@/app/store/slice/confirmationSlice';
import { useForm } from 'react-hook-form';

export default function Confirmation() {
  const dispatch = useDispatch();
  const { phone } = useSelector((state) => state.signup);
  const [result, setResult] = useState({
    phone: phone,
    code: '',
  });

  const handleOnChange = (res) => {
    setResult((prevState) => ({ ...prevState, code: res }));
  };

  const confirmationClick = () => {
    dispatch(confirmationFetch(result));
  };

  return (
    <div>
      <div className={s.confirmation}>
        <button className={s.item}>
          <span>Потверждение номера телефона</span>
        </button>
        <p>
          `На ваш номер ${phone} был отправлен код. Он нужен для потверждения
          вашей личности`
        </p>
        <div className={s.cont}>
          <div className={s.contai}>
            <AuthCode
              length={4}
              allowedCharacters="numeric"
              containerClassName="contai"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button onClick={confirmationClick} className={s.button}>
          <span>Изменить пароль</span>
        </button>
      </div>
    </div>
  );
}
