"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in Our Club",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your Teammates",
    image: "/slide3.jpg",
  },
];

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
      const interval= setInterval( ()=>
      setCurrentSlide(
             (prev)=>(prev===data.length-1 ? 0 :prev+1)
         ),2000
    );
  
      return () => clearInterval(interval);
      
    
    }, );
  

  return (
    <div className='flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-r6em)] lg:flex-row'>
      {/* Text cont */}
      <div className='flex-1 flex items-center justify-center flex-col gap-4 bg-black text-white font-bold '>
        <h1 className='text-2xl md:text-4xl  xl:text-5xl text-center uppercase p-4'>
          {data[currentSlide].title}
        </h1>
        <Link href="/menu/pastas">
        <button className='bg-orange-600 text-white py-3 px-6 uppercase rounded-full'>
          Order Now
        </button>
        </Link>
      </div>
      {/* Image cont */}
      <div className='flex-1 relative '>
        <Image
          src={data[currentSlide].image}
          alt=""
          layout="fill"
          className='object-cover'
        />
      </div>
    </div>
  );
}

export default Slider;
