import Instagram from '../../assets/icons/instagram.svg'
import Whatsup from '../../assets/icons/whatsup.svg'
import Facebook from '../../assets/icons/facebook.svg'
import "./style.scss"
const index = () => {
    return (
        <footer>
           <div className="container">
               <div className="wrapper-fotter flex justify-between mb-[60px] pt-[58px] pb-[33px]">
                   
                    <div className="foter-one ">

                            <p className='text-[18px] mb-[18px]'>Title</p>
                            <p className='text-[12px] mb-[18px]'>+998991234567</p>

                        <div className='flex gap-[20px]'>
                            <img src={Instagram} alt="" />
                            <img src={Whatsup} alt="" />
                            <img src={Facebook} alt="" />
                        </div>
                    </div>

                    <div className="foter-two flex flex-col gap-[12px]">
                        <p className='text-[18px]'>Help</p>
                        <div className='fot-p flex flex-col gap-[12px]'>
                        <p>Contact us</p>
                        <p>Delivery information</p>
                        <p>Payment information</p>
                        <p>Customer service</p>
                        <p>FAQ</p>
                        </div>
                    </div>

                    <div className="foter-three flex flex-col gap-[12px]">
                        <p>About us</p>
                        <div className='fot-p flex flex-col gap-[12px]'>
                        <p>Our Stores</p>
                        <p>Flower care</p>
                        <p>Site map</p>
                        </div>
                    </div>

                    <div className="foter-four flex flex-col gap-[12px]">
                        <p>Legal</p>
                        <div className='fot-p flex flex-col gap-[12px]'>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                        <p>Cookie policy</p>
                        <p>Item 4</p>
                        <p>Item 5</p>
                        </div>
                    </div>

               </div>

                <div className='chiziq mb-[20px]'>
                </div>

                <div>
                    <p className='text-[#AFB1BD] text-[12px]'>© Copyright,  SERIUS </p>
                </div>

           </div>
        </footer>
    );
};

export default index;