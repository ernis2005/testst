'use client'
import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image'
import user from '../../../public/imgs/user.png'
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { CiLogout } from "react-icons/ci";




export default function ProfilPage() {
  return (
    <div className={s.profil}>
      <div className='container'>
        <div className={s.wrapper}>
          <div className={s.user}>
            <div className={s.card}>
              <div className={s.image}>
                <Image src={user} alt="" />
              </div>
              <div>
                <h2>
                  Jane Doe
                </h2>
                <button className={s.button}>Сменить фото</button>
              </div>
            </div>
            <button className={s.btn}>
              <FaRegUser className={s.logo} />
              <span>Мой профиль</span>
            </button>
            <button className={s.btn}>
              <MdOutlinePhone className={s.logo} />
              <span>Звонки</span>
            </button>
            <button className={s.btn}>
              <CiLogout className={s.logo} />
              <span>Выйти</span>
            </button>
          </div>
          <div className={s.title}>
            <h2>Персональные данные</h2>
            <ul className={s.information}>
              <li>
                <span>Ф.И.О.:</span>
                <p>Jane Doe</p>
              </li>
              <li>
                <span>Номер телефона:</span>
                <p>+996 (555) 555 555</p>
              </li>
              <li>
                <span>Должность:</span>
                <p>Оператор</p>
              </li>
              <li>
                <span>Дата регистрации:</span>
                <p>12.12.2023 г.  <span>20:13</span></p>
              </li>
            </ul>
          </div>
          {/* <div className={s.exit}>
            <div className={s.title}>
              <p>Вы действительно хотите выйти?</p>
              <div className={s.btn}>
                <button>Да</button>
                <button>Нет</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
