'use client';
import React, { useState } from 'react';
import s from './page.module.scss';
import { FiArrowUpLeft, FiArrowDownLeft } from 'react-icons/fi';

export default function AccordionPage({ item }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };
  return (
    <>
      <div key={item.id} className={s.accor}>
        <div onClick={() => toggleAccordion(item.id)} className={s.button}>
          {openItemId === item.id ? (
            <FiArrowDownLeft className={s.logo} />
          ) : (
            <FiArrowUpLeft className={s.logo} />
          )}
          <div className={s.title}>
            <h4>{item.question}</h4>
            <div className={openItemId === item.id ? `${s.open}` : `${s.text}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
