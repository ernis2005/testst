import React from 'react'
import s from './page.module.scss'
import Logo from '../../public/imgs/Logo.png'
import Oracle from '../../public/imgs/Oracle.png'
import Image from "next/legacy/image"
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
                <Image className={s.logo} src={Logo} alt="" />
                <span>КОС и КОГ</span>
              </div>
              <p>&copy; 2023 КОС И КОГ All rights Recerved.</p>
            </div>
            <div className={s.oracle}>
              <p>Разработано в компании:</p>
              <Image className={s.image} src={Oracle} alt="" />
            </div>
          </div>
          <div className={s.footer_rigth}>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><Link className={s.link} href="/">Главная</Link></li>
                <li>
                  <Link className={s.link} href="/page/company">О компании</Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/News">Новости</Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/Questions">Вопросы</Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/contact">Контакты</Link>
                </li>
              </ul>
            </div>
            <div className={s.wrapper}>
              <div className={s.footer_flex}>
                <div>
                  <h3>Контакты</h3>
                  <ul>
                    <li>
                      <Email />
                      <Link className={s.link} href="#">@gmail.com</Link>
                    </li>
                    <li>
                      <Location />
                      <Link className={s.link} href="#">location</Link></li>
                  </ul>
                </div>
                <div className={s.footer_item}>
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
              <div className={s.footer_map}>
                <h3>Мы на карте</h3>
                <div className={s.map_link}>
                  <a
                    href="https://www.google.com/maps/@42.8673036,74.5919356,21z?hl=ru&entry=ttu"
                  >
                    Посмотреть на 2GIS
                  </a>
                  <iframe
                    className={s.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6339980505554!2d74.58391327603604!3d42.859460803404865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99f10d3e9f1%3A0xd8ae1cafa61a6ea6!2z0KTQuNC70L7RgNC90Y7QvNC-0L3QuNGP!5e0!3m2!1sru!2skg!4v1696498751488!5m2!1sru!2skg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.mobile_wrapper}>
          <div className={s.footer_item}>
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
          <div className={s.footer_map}>
            <h3>Мы на карте</h3>
            <div className={s.map_link}>
              <a
                href="https://www.google.com/maps/@42.8673036,74.5919356,21z?hl=ru&entry=ttu"
              >
                Посмотреть на 2GIS
              </a>
              <iframe
                className={s.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6339980505554!2d74.58391327603604!3d42.859460803404865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99f10d3e9f1%3A0xd8ae1cafa61a6ea6!2z0KTQuNC70L7RgNC90Y7QvNC-0L3QuNGP!5e0!3m2!1sru!2skg!4v1696498751488!5m2!1sru!2skg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
