import React from 'react'
import s from './page.module.scss'
import { FiArrowUpRight } from 'react-icons/fi'


export default function Accordion() {
  // const [openItemId, setOpenItemId] = useState(null);

  // const toggleAccordion = (itemId) => {
  //   if (openItemId === itemId) {
  //     setOpenItemId(null);
  //   } else {
  //     setOpenItemId(itemId);
  //   }
  // };

  return (
    <div>
      <div className={s.accordion}>
        <div className={s.button}
        // onClick={() => toggleAccordion(item.id)}
        >
          <p className="">
            Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?
          </p>
          <p>
            <FiArrowUpRight />
          </p>
        </div>
        <div className={s.accordion_title}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing
          </p>
        </div>
        {/* <Collapse isOpened={openItemId === item.id}>
          <p className="text-[#161616] rounded-b-[20px] bg-white pt-[10px] pb-[16px] px-[16px] shadow-md  text-justify font-[AtypDisplay]  text-[12px] font-normal mr-[10px] ml-[10px] lg:p-[30px] lg:ml-[45px] lg:mr-[45px] lg:text-[16px] xl:text-[18px] ">
            {item.description}
          </p>
        </Collapse> */}
      </div>

    </div >
  )
}
