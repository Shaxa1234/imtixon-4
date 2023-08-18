
import lokat from '../../assets/icons/lokat.svg'
import lupa from '../../assets/icons/lupa.svg'  
import korzin from '../../assets/icons/korzin.svg'
import "./style.scss";
import { NavLink, Outlet } from 'react-router-dom';

const index = () => {
    return (
        <header className='fixed top-0 w-full backdrop-blur-xl z-50'>
          <div className="container">
            <div className="navbar flex justify-between items-center mb-[40px]">

                <div className="nav-left flex gap-[7px] items-center justify-center">
                    <img src={lokat} alt="" />
                    <h2 className="text-[16px] font-normal cursor-pointer">Tashkent</h2>
                </div>

                <div className="nav-right flex gap-[20px] items-center">
                    <img src={lupa} alt="" />
                    <img src={korzin} alt="" />
                </div>

            </div>

            <div className="menyu flex items-center gap-[69px] justify-center"> 
              <NavLink to="/flowers" className='shaxx  hover:text-blue-600'>Flowers</NavLink>
              <NavLink to="/plants" className='shaxx   hover:text-blue-600'>Plants</NavLink>
              <NavLink to="" className='shaxx   hover:text-blue-600'>Gifts</NavLink>
              <NavLink to="" className='shaxx   hover:text-blue-600'>Discounts</NavLink>
              <NavLink to="" className='shaxx   hover:text-blue-600'>About us</NavLink>
            </div>

          </div>
        </header>
    );
};

export default index;