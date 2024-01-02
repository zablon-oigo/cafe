import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductsCard from '../layout/ProductsCard'
import bean from '../assets/bean.jpg'
import machine from '../assets/machine.jpg'
import mug from '../assets/mug.jpg'
import mug2 from '../assets/mug2.jpg'
import exp from '../assets/exp.jpg'
import cup from '../assets/cup.jpg'
function Products() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center md:px-32 md:py-32 py-5 px-5 bg-[#FDE9CC]">
        <h1 className="text-center font-semibold md:text-4xl text-3xl mt-14 mb-10">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos='zoom-in-down'>
            <ProductsCard img={bean} title='Coffee Beans' price='50.00'/>
            <ProductsCard img={machine} title='Coffee Machine' price='200.00'/>
            <ProductsCard img={mug} title='Coffee Mug' price='30.00'/>
            <ProductsCard img={mug2} title='Coffee Mug' price='30.00'/>
            <ProductsCard img={exp} title='Expresso' price='30.00'/>
            <ProductsCard img={cup} title='Coffee Cup' price='20.00'/>


        </div>
    </div>
    </>
  )
}

export default Products