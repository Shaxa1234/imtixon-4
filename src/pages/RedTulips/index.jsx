import React, { useState } from 'react'
import red_tulips from '../../assets/images/red_tulips.jpg'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import plus2 from '../../assets/icons/plus2.svg'
import savat from '../../assets/icons/savat.svg'
import arrow_black from '../../assets/icons/arrow-black.svg'
import arrow_grey from '../../assets/icons/arrow-grey.svg'
import { useParams } from 'react-router-dom'
import "./style.scss";
import data from '../../db'
import Cards from '../../UI/Cards'


const { newFlowers, relevant, plants } = data


const index = () => {
  const [counter, setCounter] = useState(0)
  const { id } = useParams()
  let array = [...newFlowers, ...relevant, ...plants]
  const date = array.filter(item => item.id == id)
  console.log(date, array);

  return (
    <div className='container'>
      <div className="red_tulips flex gap-[72px] mt-[134px]">


        <div className="red_tulips mt-[50px] ">
          {
            date.map(element => (
              <div className=''>
                <img src={element.image} alt="" className='w-full' />
              </div>
            ))
          }
          <div className='flex gap-[40px] mt-[20px]'>

            <div className='flex w-[142px] gap-[10px] items-center justify-center'>
              <img src={icon1} alt="" />
              <p className='text-[12px]'>Benefits
                description
              </p>
            </div>

            <div className='flex w-[142px] gap-[10px] items-center justify-center'>
              <img src={icon2} alt="" />
              <p className='text-[12px]'>
                Always fresh flowers
              </p>
            </div>

            <div className='flex w-[142px] gap-[10px] items-center justify-center'>
              <img src={icon3} alt="" />
              <p className='text-[12px]'>
                Take photo of bouquet
              </p>
            </div>

          </div>

        </div>

        <div className="red-right mt-[50px] w-[520px]">
          {
            date?.map(element => (
              <div key={element.id}>
                <h2 className='text-[24px] mb-[20px]'>{element.title}</h2>

                <div className='flex items-center gap-[20px] mb-[15px]'>
                  <p className='text-[28px]'>{element.price}</p>
                  <p className='text-[18px] line-through text-[#82828B]'>{element.discount}</p>
                </div>

                <div className='liniya mb-[40px]'>
                </div>
              </div>
            ))
          }

          <p className='text-[18px] mb-[25px]'>Count:</p>

          <div className='flex gap-7 mb-[42px] w-[30px]'>

            <img onClick={() => setCounter(counter + 1)} className='cursor-pointer' src={plus} alt="" />
            <p className='w-[20px]'>{counter}</p>
            <img onClick={() => setCounter(counter > 0 ? counter - 1 : counter)} className='cursor-pointer' src={minus} alt="" />

          </div>

          <p className='text-[16px] mb-[20px]'>Color:</p>

          <div className='flex gap-[20px] mb-[54px]'>

            <div className='grey w-[36px] h-[36px] bg-[#F0F0F5] rounded-full cursor-pointer focus:border-2 focus:border-blue-700'>
            </div>

            <div className='grey w-[36px] h-[36px] bg-[#EE7764] rounded-full cursor-pointer focus:border-2 focus:border-blue-700'>
            </div>

            <div className='grey w-[36px] h-[36px] bg-[#FFBC2C] rounded-full cursor-pointer focus:border-2 focus:border-blue-700'>
            </div>

          </div>

          <div className='flex gap-5 mb-[40px]'>

            <button className='bg-[#4e51e6] w-[309px] py-[16px] text-white rounded-md hover:bg-blue-500 active:bg-blue-300'>
              Button
            </button>

            <img src={savat} alt="" />

          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Bouquet contents
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Details
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Delivery & Pay policy
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>


        </div>

      </div>

      <div className='pass mt-[160px]'>


        <div className='flex justify-between mb-[40px]'>
          <p className='text-[24px]'>Similar flowers</p>

          <div className='flex'>
            <img src={arrow_grey} alt="" />
            <img src={arrow_black} alt="" />
          </div>
        </div>

        <div className='flex justify-between'>
          {newFlowers.map((item, index) => {
            return <Cards state={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default index