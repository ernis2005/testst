import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import Logo from '../../public/imgs/Logo.png'
import Link from 'next/link'
export default function Header() {
  return (
    <div>
      <div className={` container ${s.Header}`}>
        <nav className=''>
          <div className={s.header_logo}>
            <Image src={Logo} alt="" />
            <span >КОС и КОГ</span>
          </div>
          <div className={s.header_menu}>
            <ul className={s.header_link}>
              <li className='px-[20px]'>
                <Link href="#">Главная</Link>
              </li>
              <li>
                <Link href="#">О компании</Link>
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
            <button>Войти</button>
          </div>

        </nav>
      </div>
    </div>
  )
}
