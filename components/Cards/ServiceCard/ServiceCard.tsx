import Image from "next/legacy/image"
import React from 'react'
import s from './page.module.scss'
interface Person {
  props: {
    title: string;
    description: string;
    img: string;
  }

}
export default function ServiceCard({ props }: Person) {
  return (
    <>
      <div className={s.card}>
        <div className={s.image}>
          <Image layout='fill' objectFit='cover' src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
      </div>
    </>
  )
}
