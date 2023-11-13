import Image from "next/legacy/image";
import s from './page.module.scss'
import ComponyImg from '../public/imgs/compony.png'
import { FiArrowUpRight } from 'react-icons/fi'
import BgImage from '../public/imgs/hero.png'
import { MdOutlineLocalPhone } from 'react-icons/md'
import Link from 'next/link'
import ServiceCard from '@/components/Cards/ServiceCard/ServiceCard';
import iPhone15 from '../public/imgs/iPhone15.png'
import NewsCard from '@/components/Cards/NewsCard/NewsCard';
import Accordion from '@/components/Accordion/Accordion';
import Iphone from '../public/imgs/iPhone15.png'
import Play from '../public/imgs/play.png'
import Appstore from '../public/imgs/appstore.png'
import { MdLocalPhone } from 'react-icons/md';


const data = [{
  id: 1,
  title: 'Наличие спецтифлосурдо средств',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  img: '/imgs/blog1.png'
},
{
  id: 2,
  title: 'Спортивная жизнь КОС и КОГ',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  img: '/imgs/blog2.png'
},
{
  id: 3,
  title: 'Нормативная база',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  img: '/imgs/blog3.png'
}
]

const avatar = [{
  id: '1',
  img: '/imgs/avatar1.png'
},
{
  id: '2',
  img: '/imgs/avatar2.png'
},
{
  id: '3',
  img: '/imgs/avatar3.png'
},
{
  id: '4',
  img: '/imgs/avatar4.png'
}
]

const accordion = [
  {
    id: 1,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
  {
    id: 2,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
  {
    id: 3,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
  {
    id: 4,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
  {
    id: 5,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
  {
    id: 6,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
  {
    id: 7,
    title: 'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing'
  },
]

const logo = [
  {
    id: 1,
    img: '/imgs/bmw.png',
    title: 'BMW'
  },
  {
    id: 2,
    img: '/imgs/tesla.png',
    title: 'TESLA'
  },
  {
    id: 3,
    img: '/imgs/apple.png',
    title: 'APPLE'
  },
  {
    id: 4,
    img: '/imgs/toyota.png',
    title: 'TOYOTA'
  },
  {
    id: 5,
    img: '/imgs/porsche.png',
    title: 'PORSCHE'
  },
  {
    id: 6,
    img: '/imgs/bmw.png',
    title: 'BMW'
  },
  {
    id: 7,
    img: '/imgs/tesla.png',
    title: 'TESLA'
  },

]

export default function Home() {


  return (
    <div>
      <div className='container'>
        <div>
          <div className={s.Hero}>
            <h1>Dui sapien aliquet aliquam</h1>
            <div className={s.Hero_title}>
              <p>
                Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in.
              </p>
            </div>
            <Image className={s.hero_img} objectFit='cover' src={BgImage} alt="" />
            <a href="#" className={s.link}>
              <MdLocalPhone className={s.logo} />
            </a>
          </div>
        </div>
        <div className={s.compony}>
          <div className={s.wrapper}>
            <div className={s.compony_title}>
              <h2>О компании</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
              <button>Подробнее
                <FiArrowUpRight className='w-[24px] h-[24px]' />
              </button>
            </div>
            <div className={s.compony_left}>
              <Image className={s.img} objectFit='cover' src={ComponyImg} alt="" />
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
                  <img width={100} height={100} className={s.slide_img} src={e.img} alt="" />
                  <p>{e.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={s.blog_service}>
        <div className='container'>
          <div className={s.service}>
            <div className=''>
              <div className={s.title}>
                <h2>Наши услуги</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummys </p>
              </div>
              <div className={s.blog_Card}>
                {data.map((e) => {
                  return (
                    <>
                      <ServiceCard key={e.id} props={e} />
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={s.blog}>
            <div className=''>
              <div className={s.wrapper}>
                <div className={s.title}>
                  <h2>Представим вам наше мобильное приложение</h2>
                  <p>
                    Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in.
                  </p>
                </div>
                <div className={s.iphone}>
                  <div className={s.iphone15}>
                    <Image objectFit="cover" src={Iphone} alt="" />
                  </div>
                </div>
                <div className={s.button}>
                  <div className={s.button_title}>
                    <div>
                      <h3>2000+</h3>
                      <p>
                        Quis fringilla convallis et vitae volutpat at porttitor.
                      </p>
                    </div>
                    <div className='flex -space-x-5  lg:-space-x-10'>
                      {avatar.map((e) => {
                        return (
                          <div className={s.image}>
                            <Image key={e.id} width={100} height={100} src={e.img} alt="" />
                          </div>
                        )
                      })}
                      <div className={s.Avatar}>
                        <span>
                          212+
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={s.Links}>
                    <Link className={s.Item} href="#">
                      <Image className={s.logo} src={Play} alt="" />
                      <div>
                        <span>ANDROID APP ON</span>
                        <h4>Google play</h4>
                      </div>
                    </Link>
                    <Link className={s.Item} href="#">
                      <Image className={s.logo} src={Appstore} alt="" />
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
            <div className='container'>
              <h2>Будьте в курсе наших последних событий</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
            <div className={s.new_wrapper}>
              {[1, 2, 3].map((e) => {
                return (
                  <NewsCard key={e} />
                )
              })}
            </div>
          </div>
          <div className={s.accordion}>
            <div className='container'>
              <div className={s.accor_title}>
                <h2>F.A.Q</h2>
                <h3>Вопросы и ответы</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
              </div>
              <div className={s.accordion_wrapper}>
                {accordion.map((e) => {
                  return (
                    <Accordion key={e.id} props={e} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
