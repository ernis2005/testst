'use client';
import React, { useState, useEffect } from 'react';
import s from './page.module.scss';
import Image from 'next/legacy/image';
import Logo from '../../public/imgs/Logo.png';
import Link from 'next/link';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import Modal from '@/components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import authSlice, { userProfile } from '@/app/store/slice/authSlice';
import Avatar from '../../public/imgs/avatar.png';
import { handleModal } from '@/app/store/slice/modalSlice';
import TestJS from '../Test/Test';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  const { isUser, error, userInfo } = useSelector((state) => state.auth);

  const getuser = () => {
    const id = JSON?.parse(localStorage.getItem('userToken'));
    if (id !== null) {
      dispatch(userProfile(id));
    }
  };

  useEffect(() => {
    getuser();
  }, []);
  const handleModalOnclik = () => {
    dispatch(handleModal(!modal));
  };
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modal]);
  return (
    <div>
      <TestJS />
      <div className={`${s.Header}`}>
        <div className="container">
          <nav className="">
            <Link href="/" className={s.header_logo}>
              <Image className={s.logo} src={Logo} alt="" />
              <span>КОС и КОГ</span>
            </Link>
            <div className={s.header_menu}>
              <ul className={`${s.header_link}`}>
                <li className="">
                  <Link className={s.link} href="/">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/company">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/News">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/Questions">
                    Вопросы
                  </Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/contact">
                    Контакты
                  </Link>
                </li>
              </ul>
              {userInfo ? (
                <Link className={s.profil} href="/page/profil">
                  <Image
                    width={70}
                    height={70}
                    src={
                      userInfo.image_profile === null
                        ? Avatar
                        : userInfo?.image_profile
                    }
                    alt=""
                  />
                </Link>
              ) : (
                <button onClick={handleModalOnclik} className={s.header_button}>
                  Войти
                </button>
              )}
              <button onClick={() => setToggle(!toggle)} className={s.toggle}>
                {toggle ? (
                  <RiCloseFill className={s.logo} />
                ) : (
                  <RiMenu3Fill className={s.logo} />
                )}
              </button>
            </div>
          </nav>
        </div>
        {toggle && (
          <ul className={`${s.toggle_menu}`}>
            <li className="">
              <Link
                onClick={() => setToggle(!toggle)}
                className={s.link}
                href="/"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(!toggle)}
                className={s.link}
                href="/page/compony"
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(!toggle)}
                className={s.link}
                href="/page/news"
              >
                Новости
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(!toggle)}
                className={s.link}
                href="/page/questions"
              >
                Вопросы
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(!toggle)}
                className={s.link}
                href="/page/contact"
              >
                Контакты
              </Link>
            </li>
          </ul>
        )}
        {modal && <Modal />}
      </div>
    </div>
  );
}
