import React from 'react'
import {useState,useEffect} from 'react'
import { FaPinterest } from "react-icons/fa";
import {SiCoffeescript} from 'react-icons/si'
import {  Link } from 'react-scroll'
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SiTwitter } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
function Footer() {
    const[currentDate,setcurrentDate]=useState(new Date().getFullYear())
    useEffect(()=>{
        const interval=setInterval(()=>{
            setcurrentDate(new Date().getFullYear())
        },1000)
        return () => clearInterval(interval)
    },[])
  return (
    <>
    <div className="bg-gradient-to-r  from-[#FDE9CC] to-[#AB6B2E] md:px-30 px-5 py-10 ">
        <div className="flex  justify-center gap-4 flex-col md:flex-row">
             <div className="w-full md:w-2/3">
             <div className="mb-6 flex items-center gap-3">
                <h2 className="text-3xl font-semibold">Cafe</h2>
                <SiCoffeescript className='text-5xl'/>
                
            </div>
            <div className="">
            <p className="text-xl">Established in 2009, our cafe has been a haven for coffee enthusiasts, serving countless individuals over the years. Our commitment to quality and passion for the perfect cup of coffee has made us a beloved destination for those seeking a memorable coffee experience.</p>

            </div>
             </div>
          <div className="w-full md:w-3/4 flex md:justify-around justify-start flex-col md:flex-row gap-4">
          <div className="flex flex-col justifys-center gap-6">
                <h2 className="text-3xl font-semibold">Useful Links</h2>
            <Link to={'home'} spy={true} smoth={true} duration={500} className='cursor-pointer text-xl font-sans'>
            Home
          </Link>
          <Link to={'menu'} spy={true} smoth={true} duration={500} className='cursor-pointer text-xl font-sans'>
            Menu
          </Link>
          <Link to={'about'} spy={true} smoth={true} duration={500} className='cursor-pointer text-xl font-sans'>
            About Us
          </Link>
          <Link to={'products'} spy={true} smoth={true} duration={500} className='cursor-pointer text-xl font-sans'>
            Products
          </Link>
          <Link to={'reviews'} spy={true} smoth={true} duration={500} className='cursor-pointer text-xl font-sans'>
            Reviews
          </Link>
            </div>
         <div className="">
            <h2 className="mb-6 text-3xl font-semibold">Contact Us</h2>
            <div className="flex gap-3 flex-col">
             <div className="flex gap-3 items-center">
             <IoMdCall  className='text-3xl text-white'/>
             <p className='text-lg'>+91 1234567890</p>
             </div>
            <div className="flex gap-3 items-center">
            <MdOutlineEmail  className='text-3xl text-white'/>
            <p className='text-lg'>hello@example.com</p>
            </div>
           <div className="flex gap-3 items-center">
            <FaLocationDot  className='text-3xl text-white'/>
            <p className='text-lg'>Nairobi, Kenya</p>
            </div> 
            </div>
            <div className="mt-6">
                <h2 className="text-3xl font-medium mb-4">Socials</h2>
                <div className="flex gap-3 items-center">
                <IoLogoFacebook  className='text-3xl text-white'/>
                <SiTwitter  className='text-3xl text-white'/>
                <FaPinterest  className='text-3xl text-white'/>
                <FaYoutube  className='text-3xl text-white'/>
                </div>
            </div>
         </div>
          </div>
        </div>
        
        <p className='text-white text-center mt-10'>Copyright &copy; {currentDate}. All Rights Reserved</p>
      
    </div>

    </>
  )
}

export default Footer