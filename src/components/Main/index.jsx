import strelka from '../../assets/icons/arrow-black.svg'
import strelka2 from '../../assets/icons/arrow.svg'
import strelka3 from '../../assets/icons/arrow-grey.svg'
import CarouselIntro from "./Carousel"
import Cards from '../../UI/Cards'
import data from '../../db'

const { newFlowers } = data
const { relevant } = data

const index = () => {
    return (
        <main>
            <div className="container">
                <div className='mt-[134px]'>
                    <CarouselIntro />

                    <div className="wrapper font-Roboto flex justify-between mb-[47px]">

                        <div className="wrapper-left w-[600px] h-[220px] py-[46px] px-[80px]">
                            <h2 className='text-[28px] mb-[10px]'>Nice little gifts</h2>
                            <p className='text-[18px] mb-[24px]'>for loved ones</p>
                            <button className='flex items-center justify-center gap-[12px] hover:text-blue-700'>
                                <p>View now</p>
                                <img src={strelka} alt="" />
                            </button>
                        </div>

                        <div className="wrapper-right w-[600px] h-[220px] py-[46px] px-[80px]">
                            <h2 className='text-[28px] mb-[10px]'>Plants</h2>
                            <p className='text-[18px] mb-[24px]'>for home comfort</p>
                            <button className='flex items-center justify-center gap-[12px] hover:text-blue-700'>
                                <p>View now</p>
                                <img src={strelka} alt="" />
                            </button>
                        </div>

                    </div>

                    <div className="cards mb-[93px]">

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
        </main>
    );
};
export default index;