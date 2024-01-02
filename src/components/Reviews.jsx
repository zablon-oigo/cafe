import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReviewsCard from '../layout/ReviewsCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import johnsmith from '../assets/johnsmith.jpg';
import leah from '../assets/leah.jpg';
import jane from '../assets/jane.jpg';
import andrew from '../assets/andrew.jpg';
import juan from '../assets/juan.jpg';
import john from '../assets/john.jpg';

function Reviews() {
  useEffect(() => {
    AOS.init();
 }, []);
  const reviewsData = [
    {
      desc: 'Absolutely love this cafe! The atmosphere is so welcoming, and the coffee is top-notch. A perfect spot to unwind and enjoy a delightful cup of goodness.',
      img: johnsmith,
      title: 'John Smith'
    },
    {
      desc: 'Visited the cafe today and was blown away by the incredible coffee selection. The baristas are true experts, and the attention to detail in each cup is unmatched. Highly recommended!',
      img: john,
      title: 'John Doe'
    },
    {
      desc: 'Such a gem of a cafe! The quality of their coffee beans is exceptional, and you can taste the dedication in every sip. Great place to start your day or take a break.',
      img: jane,
      title: 'Jane Doe'
    },
    {
      desc: "I've become a regular at this cafe, and for good reason. The friendly staff, cozy ambiance, and consistently excellent coffee make it my go-to spot. It's a true coffee lover's paradise!",
      img: juan,
      title: 'Juan Peter'
    },
    {
      desc: "Had the best coffee experience here! The flavors are rich and distinct, and the staff goes above and beyond to ensure a memorable visit. Can't wait to come back for more!",
      img: leah,
      title: 'Leah Samwel'
    },
    {
      desc: "This cafe has become my happy place. The coffee is outstanding, the service is impeccable, and the overall vibe is just perfect. A must-visit for any coffee enthusiast!",
      img: andrew,
      title: 'Andrew Kings'
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const gridLayout = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos='fade-up'>
      {reviewsData.map((review, index) => (
        <ReviewsCard key={index} desc={review.desc} img={review.img} title={review.title} />
      ))}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="md:min-h-screen min-h-[60vh] md:px-30 md:py-30 px-5 py-5">
        <h2 className="md:text-4xl text-center text-3xl font-semibold mt-10 mb-10">Customer's Reviews</h2>
        {isMobile ? (
          <Slider {...settings}>
            {reviewsData.map((review, index) => (
              <ReviewsCard key={index} desc={review.desc} img={review.img} title={review.title} />
            ))}
          </Slider>
        ) : (
          gridLayout
        )}
      </div>
    </>
  );
}

export default Reviews;
