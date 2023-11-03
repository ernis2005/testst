import Image from 'next/image';
import s from './page.module.scss'
import ComponyImg from '../public/imgs/compony.png'
import { FiArrowUpRight } from 'react-icons/fi'
import BgImage from '../public/imgs/hero.png'
import { MdOutlineLocalPhone } from 'react-icons/md'
import Link from 'next/link'
import ServiceCard from '@/components/Cards/ServiceCard/ServiceCard';
import iPhone15 from '../public/imgs/iPhone15.png'
import Appstore from '@/components/svg/Appstore';
import PlayMarket from '@/components/svg/PlayMarket';
import NewsCard from '@/components/Cards/NewsCard/NewsCard';
import Accordion from '@/components/Accordion/Accordion';



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
export default function Home() {


  return (
    <div>
      <div className='container'>
        <div>
          <div className={s.Hero}>
            <h1>Dui sapien aliquet aliquam</h1>
            <div className={s.Hero_title}>
              <p></p>
              <p>
                Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in.
              </p>
              <Link href='#' className={s.link}>
                <MdOutlineLocalPhone className={s.logo} />
              </Link>
            </div>
            <Image src={BgImage} alt="" />
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
              <Image className='w-[864px]' src={ComponyImg} alt="" />
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
                  <div className={s.iphone15} />
                </div>
                <div className={s.button}>
                  <div>
                    <h3>2000+</h3>
                    <p>
                      Quis fringilla convallis et vitae volutpat at porttitor.
                    </p>
                  </div>
                  <div className='flex -space-x-10'>
                    {avatar.map((e) => {
                      return (
                        <Image key={e.id} className={s.image} width={100} height={100} src={e.img} alt="" />
                      )
                    })}
                    <div className={s.Avatar}>
                      <span>
                        212+
                      </span>
                    </div>
                  </div>
                  <div className={s.Links}>
                    <Link className={s.Item} href="#">
                      <PlayMarket />
                      <div>
                        <span>ANDROID APP ON</span>
                        <h4>Google play</h4>
                      </div>
                    </Link>
                    <Link className={s.Item} href="#">
                      <Appstore />
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
        <div className='container'>
          <div className={s.news}>
            <h2>Будьте в курсе наших последних событий</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className={s.new_wrapper}>
              {[1, 2, 3].map((e) => {
                return (
                  <NewsCard key={e} />
                )
              })}
            </div>
          </div>
          <div className={s.accordion}>
            <div className={s.accordion_wrapper}>
              {[1, 2, 3, 4].map((e) => {
                return (
                  <Accordion key={e} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
