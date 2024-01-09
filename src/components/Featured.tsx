import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ProductType } from '@/types/types';

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

 const Featured = async () => {

  const featuredProducts:ProductType[] = await getData()

  return (
    <div className='w-screen h-[100vh] overflow-x-scroll bg-black text-white'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className='w-screen h-[70vh] flex flex-col items-center gap-1justify-around text-center p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] xl:gap-3'
          >
            {/* IMAGE */}
            {item.img && (
              <div className='relative flex-1 w-full mb-2 hover:rotate-[60deg] transition-all duration-500'>
                <Image
                  src={item.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className='object-contain'
                />
              </div>
            )}
            {/* TEXT */}
            <div className='flex-1 flex flex-col gap-1 items-center justify-center xl:gap-3'>
              <h1 className='text-base font-bold uppercase xl:text-2xl'>{item.title}</h1>
              <p className='text-xs p-2 xl:text-sm xl:p-4'>{item.desc}</p>
              <span className='text-base font-semibold p-0.5 xl:text-xl' style={{ display: 'block' }}>
                ${item.price}
              </span>
             <Link href="/cart"> <button className='bg-orange-600 p-2 rounded-md hover:bg-orange-700'>
                Add to cart
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
