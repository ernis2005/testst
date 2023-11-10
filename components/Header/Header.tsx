'use client'
import React, { useState } from 'react'
import s from './page.module.scss'
import Image from "next/legacy/image"
import Logo from '../../public/imgs/Logo.png'
import Link from 'next/link'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import Modal from '@/components/Modal/Modal'
export default function Header() {
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState(false)

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
              <button onClick={() => setModal(!modal)} className={s.header_button}>Войти</button>
              <button
                onClick={() => setToggle(!toggle)} className={s.toggle}>
                {toggle ?
                  <RiCloseFill className={s.logo} />
                  :
                  <RiMenu3Fill className={s.logo} />}
              </button>
            </div>
          </nav>
        </div>
        {toggle &&
          <ul className={`${s.toggle_menu}`}>
            <li className=''>
              <Link onClick={() => setToggle(!toggle)} className={s.link} href="/">Главная</Link>
            </li>
            <li>
              <Link onClick={() => setToggle(!toggle)} className={s.link} href="/page/compony">О компании</Link>
            </li>
            <li>
              <Link onClick={() => setToggle(!toggle)} className={s.link} href="/page/news">Новости</Link>
            </li>
            <li>
              <Link onClick={() => setToggle(!toggle)} className={s.link} href="/page/questions">Вопросы</Link>
            </li>
            <li>
              <Link onClick={() => setToggle(!toggle)} className={s.link} href="/page/contact">Контакты</Link>
            </li>
          </ul>}
        {modal &&
          <Modal setModal={setModal} modal={modal} />}
      </div>
    </div>
  )
}
