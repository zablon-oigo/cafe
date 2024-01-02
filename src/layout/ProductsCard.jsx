import React from 'react'
import Button from './Button'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'

function ProductsCard(props) {
  return (
    <div>
        <div className="bg-white p-3 rounded-lg shadow-2xl">
            <img src={props.img} alt="" className="rounded md:h-[300px] h-[400px] md:w-[300px] w-full object-center object-cover" />
            <div className="flex flex-col items-center gap-3 mt-5">
                <h2 className="text-xl font-semibold">{props.title}</h2>
                <div className="flex items-center gap-1">
                    <BsStarFill className='text-[#AB6B2E]'/>
                    <BsStarFill className='text-[#AB6B2E]'/>
                    <BsStarFill className='text-[#AB6B2E]'/>
                    <BsStarFill className='text-[#AB6B2E]'/>
                    <BsStarHalf className='text-[#AB6B2E]'/>
                    
                </div>
                <h3 className="font-semibold text-xl">${props.price}</h3>
                <Button title='ADD TO CART'/>

            </div>
        </div>
    </div>
  )
}

export default ProductsCard