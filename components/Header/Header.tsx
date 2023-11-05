import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import Logo from '../../public/imgs/Logo.png'
import Link from 'next/link'
import { RiMenu3Fill } from 'react-icons/ri'
export default function Header() {
  return (
    <div>
      <div className={`${s.Header}`}>
        <div className='container'>
          <nav className=''>
            <div className={s.header_logo}>
              <Image className={s.logo} src={Logo} alt="" />
              <span >КОС и КОГ</span>
            </div>
            <div className={s.header_menu}>
              <ul className={`${s.header_link}`}>
                <li className='px-[20px]'>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <Link href="/Compony">О компании</Link>
                </li>
                <li>
                  <Link href="#">Новости</Link>
                </li>
                <li>
                  <Link href="#">Вопросы</Link>
                </li>
                <li>
                  <Link href="#">Контакты</Link>
                </li>
              </ul>
              <button className={s.header_button}>Войти</button>
              <button className={s.toggle}>
                <RiMenu3Fill className={s.logo} />
              </button>
            </div>
          </nav>
        </div>

      </div>
    </div>
  )
}
