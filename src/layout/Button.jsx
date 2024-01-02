import React from 'react'

function Button(props) {
  return (
   
        <>
        <button className="px-6 py-3 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all duration-300 rounded ">{props.title}</button>
        </>
    
  )
}

export default Button