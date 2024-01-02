import React from 'react'
import MenuCard from '../layout/MenuCard'
import expresso from '../assets/expresso.jpg'
import capuccinno from '../assets/capuccino.jpg'
import latte from '../assets/latte.jpg'
import ice from '../assets/iced.jpg'
import matcha from '../assets/matcha.jpg'
import choclate from '../assets/choclate.jpg'

function Menu() {
  return (
    <>
    <div className="min-h-screen flex flex-col  md:px-32 px-5 bg-[#FDE9CC]">
        <h1 className="text-4xl font-semibold text-center mb-10 mt-24">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MenuCard img={expresso} title="Expresso" price="5.00" />
            <MenuCard img={capuccinno} title="Capuccino" price="5.00" />
            <MenuCard img={latte} title="Latte" price="5.00" />
            <MenuCard img={ice} title="Ice Coffee" price="5.00" />
            <MenuCard img={matcha} title="Matcha Latte" price="5.00" />
            <MenuCard img={choclate} title="Choclate Latte" price="5.00" />

        </div>
    </div>
    </>
  )
}

export default Menu