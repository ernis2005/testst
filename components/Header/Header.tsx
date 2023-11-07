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
            <Link href="/" className={s.header_logo}>
              <Image className={s.logo} src={Logo} alt="" />
              <span >КОС и КОГ</span>
            </Link>
            <div className={s.header_menu}>
              <ul className={`${s.header_link}`}>
                <li className='px-[20px]'>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <Link href="/page/compony">О компании</Link>
                </li>
                <li>
                  <Link href="/page/news">Новости</Link>
                </li>
                <li>
                  <Link href="/page/questions">Вопросы</Link>
                </li>
                <li>
                  <Link href="/page/contact">Контакты</Link>
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
