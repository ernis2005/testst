import React from 'react';
import s from './page.module.scss';
import Spiner from '@/components/Spiner/Spiner';
import { fetchQuintion } from '@/app/getData/getData';
import AccordionPage from '@/components/AccordionPage/AccordionPage';
export const metadata = {
  title:  " Вапросы и ответы",
  description: '',
  icons: [
    {
      rel: "icon",
      sizes: "any",
      url: "/logo.jpg",
    },
  ],
}
export default async function QuestionPage() {
  const data = await fetchQuintion();
  console.log(data.results);
  return (
    <div className={s.accordion}>
      <div className="container">
        <div className={s.title}>
          <h2>F.A.Q</h2>
          <h3>Вопросы и ответы</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text
          </p>
        </div>
        <div className={s.wrapper}>
          {data.results.map((item) => {
            return <AccordionPage item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
