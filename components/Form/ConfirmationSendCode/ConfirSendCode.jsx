import React, { useRef, useState } from 'react';
import s from './page.module.scss';
import AuthCode, { AuthCodeRef } from 'react-auth-code-input';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { sendCodeFitchCode } from '@/app/store/slice/sendFirmaSlice';
import { handleTabClick } from '@/app/store/slice/modalSlice';
import Spiner from '@/components/Spiner/Spiner';

export default function ConfirSendCode() {
  const dispatch = useDispatch();
  const { phone } = useSelector((state) => state.sendCode);
  const { error, loading } = useSelector((state) => state.cod);
  const [result, setResult] = useState({
    phone: phone,
    code: '',
  });

  console.log(error);
  const handleOnChange = (res) => {
    setResult((prevState) => ({
      ...prevState,
      code: res,
    }));
  };

  const confirmationClickSend = () => {
    dispatch(sendCodeFitchCode(result));
  };
  const handleBackOnclik = () => {
    dispatch(handleTabClick(3));
  };

  return (
    <div>
      <div className={s.confirmation}>
        <button onClick={handleBackOnclik} className={s.item}>
          <span>Потверждение номера телефона</span>
        </button>
        <p>
          `На ваш номер 996 был отправлен код. Он нужен для потверждения вашей
          личности`
        </p>
        {/* {data && <p style={{ color: 'red' }}>{data.error}</p>} */}
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
        {error && (
          <p style={{ color: 'red', textAlign: 'start' }}>{error.error}</p>
        )}

        <button onClick={confirmationClickSend} className={s.button}>
          <span>{loading ? <Spiner /> : 'Изменить пароль'}</span>
        </button>
      </div>
    </div>
  );
}
