'use client'
import Image from "next/legacy/image"
import Link from 'next/link'
import React, { useEffect } from 'react'
import s from './page.module.scss'
import NewsImage from '../../../public/imgs/newsPost.png'
import { FiArrowUpRight } from 'react-icons/fi'
import NewCards from '@/components/Cards/NewCards/NewCards'
import { fetchData } from "@/app/store/slice/newSlice"
import { useDispatch, useSelector } from "react-redux"






export default function NewsPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <div className='container'>
        <div className={s.news}>
          <h2>
            Последние новости
          </h2>
          <div className={s.new_card}>
            <Image objectFit='cover' className={s.image} src={NewsImage} alt="" />
            <div className={s.title}>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
              <div className={s.data}>
                <p>03.04.2023</p>
                <Link className={s.link} href={`news/${1}`}>Читать полностью  <FiArrowUpRight className={s.logo} /> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cards}>
          <h2>More articles</h2>
          <div className={s.wrapper}>
            {[1, 2, 3, 4].map((e) => {
              return (
                <NewCards />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
