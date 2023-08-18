import strelka from '../../assets/icons/arrow.svg'  
import "./style.scss"
import React from 'react';
import { Carousel } from 'antd';


const CarouselIntro = () => {
    return(
        <div>
        <Carousel  className="mt-[30px] mb-[40px]">

      <div className='shaxa w-full h-[220px] px-[81px] py-[30px]' >
      <h2 className='mb-[10px] text-[28px] font-roboto font-medium '>40% OFF</h2>
      <p className='desc text-[18px] text-black mb-[24px]'>Best deals this week. Fresh flowers, plants and gifts</p>    
       <button className='bg-[black] flex gap-[12px] justify-center items-center px-[17px] py-[17px] rounded-[5px] hover:bg-slate-600 active:bg-slate-400'>
        <p className='text-white'>Shop now</p>
       <img src={strelka} alt="" /> 
       </button>
      </div>

      <div className='shaxa w-full h-[220px] px-[81px] py-[30px]' >
      <h2 className='mb-[10px] text-[28px] font-roboto font-medium '>40% OFF</h2>
      <p className='desc text-[18px] font-normal text-black mb-[24px]'>Best deals this week. Fresh flowers, plants and gifts</p>    
       <button className='bg-[black] flex gap-[12px] justify-center items-center px-[17px] py-[17px] rounded-[5px] hover:bg-slate-600 active:bg-slate-400'>
        <p className='text-white'>Shop now</p>
       <img src={strelka} alt="" /> 
       </button>
      </div>

      <div className='shaxa w-full h-[220px] px-[81px] py-[30px]' >
      <h2 className='desc mb-[10px] text-[28px] font-roboto font-medium '>40% OFF</h2>
      <p className='text-[18px] font-normal text-black mb-[24px]'>Best deals this week. Fresh flowers, plants and gifts</p>    
       <button className='bg-[black] flex gap-[12px] justify-center items-center px-[17px] py-[17px] rounded-[5px] hover:bg-slate-600 active:bg-slate-400 '>
        <p className='text-white'>Shop now</p>
       <img src={strelka} alt="" /> 
       </button>
      </div>

      <div className='shaxa w-full h-[220px] px-[81px] py-[30px]' >
      <h2 className='desc mb-[10px] text-[28px] font-roboto font-medium '>40% OFF</h2>
      <p className='text-[18px] font-normal text-black mb-[24px]'>Best deals this week. Fresh flowers, plants and gifts</p>    
       <button className='bg-[black] flex gap-[12px] justify-center items-center px-[17px] py-[17px] rounded-[5px] hover:bg-slate-600 active:bg-slate-400'>
        <p className='text-white'>Shop now</p>
       <img src={strelka} alt="" /> 
       </button>
      </div>

    </Carousel>
        </div>
    );
};

export default CarouselIntro;