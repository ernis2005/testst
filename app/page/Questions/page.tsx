"use client"
import React, { useState } from 'react'
import s from './page.module.scss'
import { FiArrowUpLeft, FiArrowDownLeft } from 'react-icons/fi'
// import { Collapse } from 'react-collapse'
const question = [
  {
    id: 1,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    id: 2,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    id: 3,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    id: 4,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    id: 5,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    id: 6,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  }
]

export default function QuestionPage() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleAccordion = (itemId: number) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };
  return (
    <div className={s.accordion}>
      <div className="container">
        <div className={s.title}>
          <h2>F.A.Q</h2>
          <h3>Вопросы и ответы</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className={s.wrapper}>
          {question.map((item) => {
            return (
              <div key={item.id} className={s.accor}>
                <div
                  onClick={() => toggleAccordion(item.id)} className={s.button}>
                  {openItemId === item.id ?
                    <FiArrowDownLeft className={s.logo} />
                    :
                    <FiArrowUpLeft className={s.logo} />
                  }
                  <div className={s.title}>
                    <h4>
                      {item.title}
                    </h4>
                    <div className={openItemId === item.id ? `${s.open}` : `${s.text}`}>
                      <p>
                        {item.discription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}
