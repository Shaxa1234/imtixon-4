import React from 'react'
import './style.scss'
import Flowers_Carousel from './Flowers_Carousel'
import strelka from '../../assets/icons/arrow-black.svg'
import strelka2 from '../../assets/icons/arrow.svg'
import strelka3 from '../../assets/icons/arrow-grey.svg'
import Cards from '../../UI/Cards'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import data from '../../db'

const { newFlowers } = data
const { relevant } = data

const index = () => {
  return (
    <div className='container'>
      <div className='mt-[134px]'>
        <Breadcrumb className='py-4' items={[
          {
            title: (
              <NavLink
                to="/"
              >
                Home
              </NavLink>
            ),
          },
          {
            title: (
              <NavLink
                to="/flowers"
              >
                Flowers
              </NavLink>
            ),
          },]}
        />

        <Flowers_Carousel />


        <div className="cards mb-[93px] mt-[79px]">

          <div className='flex justify-between mb-[44px]'>
            <h2 className='qqq text-[24px]'>New</h2>
            <div className='flex px-[80px] gap-[19px]'>
              <img src={strelka3} alt="" />
              <img src={strelka} alt="" />
            </div>
          </div>

          <div className='flex justify-between'>
            {
              newFlowers.map((item) => {
                return <Cards state={item} key={index} />
              })
            }
          </div>

        </div>

        <div>
          <div className='flex justify-between mb-[44px]'>
            <h2 className='qqq text-[24px]'>Relevant</h2>
            <div className='flex px-[80px] gap-[19px]'>
              <img src={strelka3} alt="" />
              <img src={strelka} alt="" />
            </div>
          </div>

          <div className='flex justify-between'>
            {
              relevant.map((item) => {
                return <Cards state={item} key={index} />
              })
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default index