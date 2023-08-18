import React, { useState } from 'react';

import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import data from '../../db'
import Cards from '../../UI/Cards'
import "./style.scss"



const { plants } = data

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];


const index = () => {
  const firstFourItems = data.plants.slice(0, 4);
  const remainingItems = data.plants.slice(4);
  const [showAllCards, setShowAllCards] = useState(false);

  const itemsToShow = showAllCards ? data.plants : data.plants.slice(0, 8);

  const handleSeeMoreClick = () => {


    setShowAllCards(!showAllCards);

  };
  return (
    <div className='container'>

      <div className="intro-plants mt-[134px]">

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
                to="/plants"
              >
                Plants
              </NavLink>
            ),
          },]}
        />


        <div className='mt-[20px] mb-[40px]'>
          <h1 className='plants text-[32px]'>All Plants</h1>
        </div>

        <div className='dropdown flex gap-[80px] mb-[60px]'>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Sort by
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Color
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Price
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Flower type
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Occasion
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

        </div>

        <div className='flex flex-wrap justify-between gap-10'>
          {
            plants.map((item, index) => {
              return <Cards state={item} key={index} />
            })
          }
        </div>

        {/* <div className='mt-[40px] flex items-center justify-center'>
          <button className='py-[14px] px-[80px] bg-black text-white rounded-md'>See more</button>
        </div> */}

        {!showAllCards && (
          <div className="justify-center ml-[500px] mt-10">
            <button className="mb-[60px] mt-2 w-[220px] bg-black text-white rounded-sm p-2 hover:bg-green-600" onClick={handleSeeMoreClick}>
              <p className="text-center font-[Inter] font-medium leading-[17px] text-[12px]">See more</p>
            </button>
          </div>
        )}
        {showAllCards && (
          <div className="w-full flex flex-wrap gap-x-[65x] justify-between ">
            {data.plants.map((item) => (
              <div key={item.id} className="bg-white items-center mt-[50px] hover:shadow-xl">
                <img src={item.image} alt={item.title} className="w-full mb-2" />
                <h2 className="text-lg font-medium mb-2">{item.title}</h2>
                <p className="text-sm font-medium ">{item.price}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default index