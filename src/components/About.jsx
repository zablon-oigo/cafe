import React from 'react'
import Button from '../layout/Button'
import about from '../assets/about.jpg'

function About() {
  return (
    <>
    <div className="min-h-screen  bg-gradient-to-r from-[#FDE9CC] to-[#AB6B2E] md:py-32 md:px-32 px-5 py-5">
        <h1 className='text-4xl text-center font-semibold mb-10'>About Us</h1>
        <div className="flex md:flex-row flex-col items-center justify-between gap-6">
            <div className="w-full md:w-3/4">
                <img src={about} alt="" className="rounded" />
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="md:text-4xl text-3xl  font-semibold mb-4 md:text-white ">What makes Cafe Coffee so special ?</h2>
                <p className="text-md mb-4">
                    Welcome to our cozy cafe, where we specialize in serving the finest coffee and providing premium coffee beans to our valued customers. Immerse yourself in the rich aroma and exquisite flavors of our carefully crafted brews. Our commitment to quality and passion for coffee sets us apart. Join us for a delightful experience that transcends the ordinary.
                </p>
                <p className="text-md mb-4">
                    Explore a world of unique blends and indulge in the artistry of our baristas. From meticulously brewed cups to carefully selected beans, every aspect of our cafe is dedicated to delivering an exceptional coffee experience. Whether you savor the moment in our inviting space or take the goodness home, our commitment to excellence remains unwavering.
                </p>
                <p className="text-md mb-4">
                    Discover the perfect cup that suits your taste buds, and embark on a journey of coffee exploration with us. Embrace the warmth, the flavors, and the community that revolves around the love for coffee. At our cafe, it's not just about coffee; it's about creating memories, fostering connections, and celebrating the joy that a perfect cup of coffee brings.
                </p>

                <Button title="Learn More" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About