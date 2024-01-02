import React from 'react'
import Button from '../layout/Button'
import { FaShoppingCart } from 'react-icons/fa'
function MenuCard(props) {
  return (
    <>
   <div className=" bg-white p-3 rounded">
   <img src={props.img} alt="" className="" />
   <div className="p-2 mt-5 flex flex-row justify-between items-center">
   <h1 className="font-semibold text-xl">{props.title}</h1>
   <h1 className="font-semibold text-xl">{props.price}</h1>
   </div>
   <div className="flex flex-row justify-between mt-3 px-2">
           <div className="flex gap-2">
           <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FDE9CC] hover:text-[#AB6B2E] transition-all duration-300">Hot</button>
            <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FDE9CC] hover:text-[#AB6B2E] transition-all duration-300">Cold</button>
           </div>
    <span>
    <FaShoppingCart size={30} className='text-[#AB6B2E]' />
   </span>
   </div>

   </div>
    </>
  )
}

export default MenuCard