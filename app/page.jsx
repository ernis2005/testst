import Image from 'next/legacy/image';
import s from './page.module.scss';
import ComponyImg from '../public/imgs/compony.png';
import { FiArrowUpRight } from 'react-icons/fi';
import BgImage from '../public/imgs/hero.png';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Link from 'next/link';
import ServiceCard from '@/components/Cards/ServiceCard/ServiceCard';
import mobilbe from '../public/imgs/ddddd.png';
import NewsCard from '@/components/Cards/NewsCard/NewsCard';
import Accordion from '@/components/Accordion/Accordion';
import Iphone from '../public/imgs/iPhone15.png';
import Play from '../public/imgs/play.png';
import Appstore from '../public/imgs/appstore.png';
import { MdLocalPhone } from 'react-icons/md';
import { fetchNews, fetchQuintion } from './getData/getData';
import LinkPhone from '../components/LinkPhone/LinkPhone';

const data = [
  {
    id: 1,
    title: 'Наличие спецтифлосурдо средств',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    img: '/imgs/blog1.png',
  },
  {
    id: 2,
    title: 'Спортивная жизнь КОС и КОГ',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    img: '/imgs/blog2.png',
  },
  {
    id: 3,
    title: 'Нормативная база',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    img: '/imgs/blog3.png',
  },
];

const avatar = [
  {
    id: '1',
    img: '/imgs/avatar1.png',
  },
  {
    id: '2',
    img: '/imgs/avatar2.png',
  },
  {
    id: '3',
    img: '/imgs/avatar3.png',
  },
  {
    id: '4',
    img: '/imgs/avatar4.png',
  },
];

const accordion = [
  {
    id: 1,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
  {
    id: 2,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
  {
    id: 3,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
  {
    id: 4,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
  {
    id: 5,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
  {
    id: 6,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
  {
    id: 7,
    title:
      'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing',
  },
];

const logo = [
  {
    id: 1,
    img: '/imgs/bmw.png',
    title: 'BMW',
  },
  {
    id: 2,
    img: '/imgs/tesla.png',
    title: 'TESLA',
  },
  {
    id: 3,
    img: '/imgs/apple.png',
    title: 'APPLE',
  },
  {
    id: 4,
    img: '/imgs/toyota.png',
    title: 'TOYOTA',
  },
  {
    id: 5,
    img: '/imgs/porsche.png',
    title: 'PORSCHE',
  },
  {
    id: 6,
    img: '/imgs/bmw.png',
    title: 'BMW',
  },
  {
    id: 7,
    img: '/imgs/tesla.png',
    title: 'TESLA',
  },
];
export const metadata = {
  title: 'КОС И КОГ',
  description: 'Свободное общение, где бы вы ни были!',
  icons: [
    {
      rel: 'icon',
      sizes: 'any',
      url: '/logo.jpg',
    },
  ],
};

export default async function Home() {
  const question = await fetchQuintion();
  const questionData = question?.results || [];
  const news = await fetchNews();
  const newsData = news?.results || [];

  return (
    <div>
      <div className="container">
        <div>
          <div className={s.Hero}>
            <h1>Dui sapien aliquet aliquam</h1>
            <div className={s.Hero_title}>
              <p>
                Quis fringilla convallis et vitae volutpat at porttitor. Est
                tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
                aliquet in.
              </p>
            </div>
            <Image
              className={s.hero_img}
              objectFit="cover"
              src={BgImage}
              alt=""
            />
          </div>
        </div>
        <div className={s.compony}>
          <div className={s.wrapper}>
            <div className={s.compony_title}>
              <h2>О компании</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
              <Link href={'page/company'} className={s.btn}>
                Подробнее
                <FiArrowUpRight className="w-[24px] h-[24px]" />
              </Link>
            </div>
            <div className={s.compony_left}>
              <div className={s.img}>
                <Image
                  width={964}
                  height={294}
                  objectFit="cover"
                  src={ComponyImg}
                  alt=""
                />
              </div>
              <div className={s.compomny_wrapper}>
                <div className={s.compony_blog}>
                  <h3>30+</h3>
                  <p>Lorem Ipsum has been</p>
                </div>
                <div className={s.compony_blog}>
                  <h3>200k+</h3>
                  <p>Lorem Ipsum has been</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.compomy_slide}>
            {logo.map((e) => {
              return (
                <div key={e.id} className={s.slide}>
                  <img
                    width={100}
                    height={100}
                    className={s.slide_img}
                    src={e.img}
                    alt=""
                  />
                  <p>{e.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={s.blog_service}>
        <div className="container">
          <div className={s.service}>
            <div className="">
              <div className={s.title}>
                <h2>Наши услуги</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummys{' '}
                </p>
              </div>
              <div className={s.blog_Card}>
                {data.map((e) => {
                  return (
                    <>
                      <ServiceCard key={e.id} props={e} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={s.blog}>
            <div className="">
              <div className={s.wrapper}>
                <div className={s.title}>
                  <h2>Представим вам наше мобильное приложение</h2>
                  <p>
                    Quis fringilla convallis et vitae volutpat at porttitor. Est
                    tincidunt massa aliquam sed enim rhoncus. Id nullam
                    sollicitudin aliquet in.
                  </p>
                </div>
                <div className={s.iphone}>
                  <div className={s.iphone15}>
                    <Image objectFit="cover" src={Iphone} alt="" />
                  </div>
                </div>
                <div className={s.mobil}>
                  <Image objectFit="cover" src={mobilbe} alt="" />
                </div>
                <div className={s.button}>
                  <div className={s.button_title}>
                    <div>
                      <h3>2000+</h3>
                      <p>
                        Quis fringilla convallis et vitae volutpat at porttitor.
                      </p>
                    </div>
                    <div className="flex -space-x-5  lg:-space-x-10">
                      {avatar.map((e) => {
                        return (
                          <div className={s.image}>
                            <Image
                              key={e.id}
                              width={100}
                              height={100}
                              src={e.img}
                              alt=""
                            />
                          </div>
                        );
                      })}
                      <div className={s.Avatar}>
                        <span>212+</span>
                      </div>
                    </div>
                  </div>
                  <div className={s.Links}>
                    <Link className={s.Item} href="#">
                      <svg
                        className={s.logo}
                        xmlns="http://www.w3.org/2000/svg"
                        width="47"
                        height="46"
                        viewBox="0 0 47 46"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_424_36756)">
                          <path
                            d="M22.0881 21.9329L0.858093 42.0534C1.0965 42.8177 1.52494 43.5226 2.11064 44.1141C2.69634 44.7057 3.42381 45.1682 4.23743 45.4665C5.05105 45.7647 5.92928 45.8908 6.80499 45.8349C7.6807 45.7791 8.53071 45.5429 9.29004 45.1443L33.1778 32.8375L22.0881 21.9329Z"
                            fill="#EA4335"
                          />
                          <path
                            d="M43.5537 18.5127L33.2238 13.1604L21.5963 22.3905L33.2711 32.8085L43.5223 27.5136C44.4304 27.0834 45.1911 26.4366 45.7218 25.6433C46.2526 24.85 46.5332 23.9404 46.5332 23.0131C46.5332 22.0858 46.2526 21.1762 45.7218 20.3828C45.1911 19.5895 44.4304 18.9427 43.5223 18.5125H43.554L43.5537 18.5127Z"
                            fill="#FBBC04"
                          />
                          <path
                            d="M0.856663 3.87329C0.72834 4.30243 0.66446 4.74525 0.666746 5.18981V40.7368C0.668077 41.1812 0.731894 41.6236 0.856663 42.0535L22.8144 22.4482L0.856663 3.87329Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M22.2463 22.9634L33.2253 13.1607L9.36923 0.796475C8.47166 0.320965 7.45081 0.0691435 6.41065 0.0666603C3.82939 0.0621223 1.56007 1.61186 0.858093 3.85901L22.2463 22.9634Z"
                            fill="#34A853"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_424_36756">
                            <rect
                              width="45.8667"
                              height="45.8667"
                              fill="white"
                              transform="translate(0.666687 0.0666504)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <div>
                        <span>ANDROID APP ON</span>
                        <h4>Google play</h4>
                      </div>
                    </Link>
                    <Link className={s.Item} href="#">
                      <svg
                        className={s.logo}
                        xmlns="http://www.w3.org/2000/svg"
                        width="47"
                        height="46"
                        viewBox="0 0 47 46"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_424_36765)">
                          <path
                            d="M24.7469 9.04745C24.598 9.04906 24.4501 9.02131 24.3119 8.96579C24.1736 8.91027 24.0477 8.82805 23.9412 8.72385C23.8347 8.61964 23.7498 8.49548 23.6913 8.35845C23.6328 8.22143 23.6019 8.07422 23.6003 7.92524C23.6003 3.5832 27.1962 0.0667542 31.6239 0.0667542C31.773 0.0647345 31.921 0.0922037 32.0594 0.147582C32.1979 0.202961 32.324 0.285157 32.4305 0.389445C32.5371 0.493732 32.622 0.618055 32.6804 0.755264C32.7387 0.892473 32.7694 1.03986 32.7706 1.18896C32.7706 5.531 29.1777 9.04745 24.7469 9.04745Z"
                            fill="#1C1C1C"
                          />
                          <path
                            d="M24.746 9.04745C24.597 9.04906 24.4491 9.02132 24.3109 8.96579C24.1726 8.91027 24.0467 8.82806 23.9402 8.72385C23.8337 8.61964 23.7488 8.49548 23.6903 8.35845C23.6318 8.22143 23.6009 8.07422 23.5993 7.92524C23.5993 3.5832 27.1952 0.0667542 31.6229 0.0667542C31.772 0.0647345 31.92 0.0922037 32.0584 0.147582C32.1969 0.202961 32.323 0.285157 32.4296 0.389445C32.5361 0.493733 32.621 0.618055 32.6794 0.755264C32.7377 0.892473 32.7684 1.03986 32.7696 1.18896C32.7696 5.531 29.1767 9.04745 24.746 9.04745ZM41.4873 32.6871C41.9307 33.0113 42.0744 33.6045 41.8236 34.0876C37.7874 41.995 34.5675 45.9334 31.626 45.9334C30.2561 45.9334 28.9107 45.4992 27.5989 44.6553C26.6573 44.0508 25.5671 43.7183 24.4484 43.6946C23.3298 43.6708 22.2264 43.9567 21.2601 44.5207C19.67 45.4534 18.1564 45.9334 16.7193 45.9334C12.3925 45.9334 5.25262 32.8859 5.25262 25.7276C5.25262 18.0832 9.34699 12.2551 15.5726 12.2551C18.502 12.2551 21.0308 12.677 23.1559 13.5363C24.0549 13.8971 25.0731 13.8726 25.9507 13.4598C27.6753 12.6465 29.9503 12.2551 32.7696 12.2551C36.2157 12.2551 39.2215 13.9368 41.7166 17.1934C41.8069 17.3108 41.8727 17.4452 41.91 17.5885C41.9474 17.7318 41.9557 17.8811 41.9343 18.0277C41.9129 18.1743 41.8623 18.315 41.7855 18.4417C41.7088 18.5684 41.6073 18.6783 41.4873 18.7651C38.7017 20.8138 37.3593 23.1102 37.3593 25.7276C37.3593 28.342 38.7017 30.6415 41.4873 32.6871Z"
                            fill="white"
                          />
                          <path
                            d="M41.4873 32.687C41.9307 33.0111 42.0744 33.6043 41.8236 34.0874C37.7874 41.9948 34.5675 45.9332 31.626 45.9332C30.2561 45.9332 28.9107 45.499 27.5989 44.6551C26.6573 44.0506 25.5671 43.7181 24.4484 43.6944C23.3298 43.6707 22.2264 43.9566 21.2601 44.5206C19.67 45.4532 18.1564 45.9332 16.7193 45.9332C12.3925 45.9332 5.25262 32.8857 5.25262 25.7275C5.25262 18.083 9.34699 12.2549 15.5726 12.2549C18.502 12.2549 21.0308 12.6769 23.1559 13.5361C24.0549 13.8969 25.0731 13.8724 25.9507 13.4596C27.6753 12.6463 29.9503 12.2549 32.7696 12.2549C36.2157 12.2549 39.2215 13.9367 41.7166 17.1932C41.8069 17.3106 41.8727 17.445 41.91 17.5883C41.9474 17.7316 41.9557 17.881 41.9343 18.0275C41.9129 18.1741 41.8623 18.3149 41.7855 18.4415C41.7088 18.5682 41.6073 18.6781 41.4873 18.7649C38.7017 20.8136 37.3593 23.11 37.3593 25.7275C37.3593 28.3419 38.7017 30.6413 41.4873 32.687Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_424_36765">
                            <rect
                              width="45.8667"
                              height="45.8667"
                              fill="white"
                              transform="translate(0.666687 0.0666504)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <div>
                        <span>Download on the</span>
                        <h4>App Store</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.blog_news}>
        <div className={s.container}>
          <div className={s.news}>
            <div className="container">
              <h2>Будьте в курсе наших последних событий</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
            {newsData.length > 0 ? (
              <div className={s.new_wrapper}>
                {newsData.map((e) => {
                  return <NewsCard key={e.id} news={e} />;
                })}
              </div>
            ) : (
              <center>пусто</center>
            )}
          </div>
          <div className={s.accordion}>
            <div className="">
              <div className={s.accor_title}>
                <h2>F.A.Q</h2>
                <h3>Вопросы и ответы</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text{' '}
                </p>
              </div>
              {questionData.length > 0 ? (
                <div className={s.accordion_wrapper}>
                  {questionData.map((e) => {
                    return <Accordion key={e.id} props={e} />;
                  })}
                </div>
              ) : (
                <center>пусто</center>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
