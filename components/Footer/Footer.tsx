import React from 'react'
import s from './page.module.scss'
import Logo from '../../public/imgs/Logo.png'
import Oracle from '../../public/imgs/Oracle.png'
import Image from 'next/image'
import Link from 'next/link'
import Email from '../svg/Email'
import Location from '../svg/Location'
import Facebook from '../svg/Facebook'
import Instagram from '../svg/Instagram'
import Linkidin from '../svg/Linkidin'
import Telegram from '../svg/Telegram'
import Whatssap from '../svg/Whatssap'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className='container'>
        <div className={s.footer_wrapper}>
          <div className={s.footer_left}>
            <div>
              <div className={s.footer_logo}>
                <Image src={Logo} alt="" />
                <span>КОС и КОГ</span>
              </div>
              <p>&copy; 2023 КОС И КОГ All rights Recerved.</p>
            </div>
            <div className={s.oracle}>
              <p>Разработано в компании:</p>
              <Image src={Oracle} alt="" />
            </div>

          </div>
          <div className={s.footer_rigth}>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="#">Главная</Link></li>
                <li><Link href="#">О компании</Link></li>
                <li><Link href="#">Новости</Link></li>
              </ul>
            </div>
            <div className={s.wrapper}>
              <div>
                <h3>Контакты</h3>
                <ul>
                  <li>
                    <Email />
                    <Link href="#">@gmail.com</Link>
                  </li>
                  <li>
                    <Location />
                    <Link href="#">location</Link></li>
                </ul>
              </div>
              <div>
                <h3>Мы в соц.сетях</h3>
                <div className={s.footer_link}>
                  <Link href="#">
                    <Facebook />
                  </Link>
                  <Link href="#">
                    <Instagram />
                  </Link>
                  <Link href="#">
                    <Linkidin />
                  </Link>
                  <Link href="#">
                    <Telegram />
                  </Link>
                  <Link href="#">
                    <Whatssap />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
