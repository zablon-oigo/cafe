import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import home from '../assets/home.png'
import Button from '../layout/Button'
function Home() {
    useEffect(() => {
        AOS.init();
     }, []);
  return (
    <div className='min-h-screen  bg-gradient-to-r from-[#AB6B2E] to-[#FDE9CC]'>
        <div className="md:px-32 px-5 md:py-32 py-10 flex flex-col-reverse md:flex-row justify-between items-center" data-aos="zoom-in-down" data-aos-duration='3000' data-easing='linear'>
            <div className="w-full md:w-1/2 mb-4">
                <h1 className='md:text-6xl text-5xl text-center md:text-start font-bold leading-tight mb-4 text-white'>Start your day with a steaming cup of coffee</h1>
                <p className="text-3xl text-center md:text-start mb-4">
                      Boost your productivity and build your mood with a glass of coffee in the morning
                </p>
                <div className="flex flex-row items-center justify-center md:justify-start gap-6">
                    <Button title="ADD TO CART"/>
                    <Button title="MORE MENU"/>
                </div>
            </div>
            <div className="relative ">
                <img src={home} alt="" className=''/>
                <div className="absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_0_rgba(8,_112,_186,_0.7)]">
                    <h1 className=' font-semibold'>20%</h1>
                 </div>
                 <div className="absolute bottom-5 left-0 bg-white px-8 py-2 rounded-full shadow-[0_20px_50px_0_rgba(8,_112,_186,_0.7)]">
                    <h2 className=" font-semibold">
                        OFF
                    </h2>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Home