import { Link } from 'react-router-dom'
import flower from '../../assets/images/flowers.png'
import React from 'react'

const index = ({ state: { id, image, title, price, discount, path } }) => {
    return (
        <Link to={`/${path}/${id}`} className='flex flex-col items-center w-[260px] hover:shadow-xl'>
            <img src={image} className='mb-[20px]' alt="" />
            <p className='text-[18px] mb-[8px]'>{title}</p>
            <div className='flex gap-4 pb-[38px]'>
                <p className='text-[14px]'>{price}</p>
                {discount && (
                    <p className='text-[14px] text-[#82828B] line-through'>{discount}</p>
                )}
            </div>
        </Link>
    )
}

export default index