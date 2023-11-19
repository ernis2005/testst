'use client';
import { useState } from 'react';
import s from './page.module.scss';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import { Collapse } from 'react-collapse';

export default function Accordion({ props }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <div>
      <div className={openItemId === props.id ? `${s.open}` : `${s.accordion}`}>
        <div className={s.button} onClick={() => toggleAccordion(props.id)}>
          <p className="">{props.question}</p>
          <p>
            {openItemId === props.id ? (
              <FiArrowDownRight className={s.logo} />
            ) : (
              <FiArrowUpRight className={s.logo} />
            )}
          </p>
        </div>
        <Collapse isOpened={openItemId === props.id}>
          <div className={s.accordion_title}>
            <p>{props.answer}</p>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
