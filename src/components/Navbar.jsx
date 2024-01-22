import { useState ,React} from 'react'
import {  Link } from 'react-scroll'
import {SiCoffeescript} from 'react-icons/si'
import Button from "../layout/Button"
import { HiBars4 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
function Navbar() {
  const[menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu)
  }
  const closeMenu=()=>{
    
    setMenu(false)
  }
  return (
    <>
    <nav className="bg-gradient-to-r  from-[#FDE9CC] to-[#AB6B2E] shadow-[0_3px_15px_rgba(0,0,0,0.2)]">
             <div className=" md:px-32 px-5 py-4 flex items-center justify-between gap-4 cursor-pointer">
             <div className="">
           <Link to={'/'} spy={true} smooth={true} offset={50} duration={500} className='text-3xl font-sans inline-flex items-center justify-center gap-4' >
              Cafe <SiCoffeescript/>
            </Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-6 font-medium">
          <Link to={'home'} spy={true} smoth={true} duration={500} className='cursor-pointer relative text-xl group'>
                  Home
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to={'menu'} spy={true} smoth={true} duration={500} className='cursor-pointer relative text-xl group'>
                  Menu
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to={'about'} spy={true} smoth={true} duration={500} className='cursor-pointer relative text-xl group'>
                  About Us
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to={'products'} spy={true} smoth={true} duration={500} className='cursor-pointer relative text-xl group'>
                  Products
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to={'reviews'} spy={true} smoth={true} duration={500} className='cursor-pointer relative text-xl group'>
                  Reviews
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="md:block hidden">
          <Button title="Login" />
        </div>
        <div className="md:hidden block" onClick={toggleMenu}>
           {menu?<LiaTimesSolid className='text-4xl text-white'/>:<HiBars4  className='text-4xl text-white'/>}
        </div>
      </div>
      <section className={`${menu?'translate-x-0':'-translate-x-full'} duration-500 transition-transform md:hidden z-10 bg-black block h-[200px] w-full absolute top-70 left-0`}>
        <div className="py-14 bg-black p-4 text-white flex flex-col items-center justify-center ">
          <div className="mb-6 flex flex-col gap-6">
          <Link to={'home'} spy={true} smoth={true} duration={500} className='cursor-pointer text-2xl font-sans' onClick={closeMenu}>
            Home
          </Link>
          <Link to={'menu'} spy={true} smoth={true} duration={500} className='cursor-pointer text-2xl font-sans' onClick={closeMenu}>
            Menu
          </Link>
          <Link to={'about'} spy={true} smoth={true} duration={500} className='cursor-pointer text-2xl font-sans' onClick={closeMenu}>
            About Us
          </Link>
          <Link to={'products'} spy={true} smoth={true} duration={500} className='cursor-pointer text-2xl font-sans' onClick={closeMenu}>
            Products
          </Link>
          <Link to={'reviews'} spy={true} smoth={true} duration={500} className='cursor-pointer text-2xl font-sans' onClick={closeMenu}>
            Reviews
          </Link>
          <Button title="Login" />
          </div>
        </div>
      </section>
    </nav>
    </>
  )
}

export default Navbar