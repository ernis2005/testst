'use client'
import React, { useRef, useState } from 'react';
import s from './page.module.scss'
import Image from 'next/image'
import { FaEye } from 'react-icons/fa'
import Images from '../../../../public/imgs/newscard.png'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

export default function NewsIn() {

  return (
    <div className={s.news_in}>
      <div className='container'>
        <div className={s.wrapper}>
          <div className={s.cards}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            <div className={s.card}>
              <Image objectFit='cover' layout='responsive' width={1000} height={1000} className={s.image} src={'/imgs/nesin.png'} alt="" />
              <div className={s.title}>
                <h5>03.04.2023</h5>
                <p>
                  <FaEye className={s.logo} />
                  <span>34 просмотра</span>
                </p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className={s.card_wrapper}>
            <h2>More articles</h2>
            <div className={s.blog}>
              {[1, 2].map((e) => {
                return (
                  <div className={s.news_card}>
                    <Image objectFit='cover' className={s.image} src={Images} alt="" />
                    <div className={s.title}>
                      <div className={s.data}>
                        <p>03.04.2023</p>
                        <Link className={s.link} href="#">
                          Читать полностью
                          <FiArrowUpRight className={s.logo} />
                        </Link>
                      </div>
                      <h4>Lorem ipsum dolor sit amet amet, consectetur adipiscing elit. </h4>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* <button>
              <span>More</span>
              <FiArrowUpRight className={s.logo} />
            </button> */}
          </div>
        </div>
      </div>
    </div >
  )
}
