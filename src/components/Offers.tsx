import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'
import Link from 'next/link'


const Offers = () => {
  return (
    <div className=" bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')]">
      {/* TEXT */}
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-5 p-4 xl:p-7 xl:gap-8'>
        <h1 className='text-white text-4xl font-bold   xl:text-6xl  uppercase p-1'>Delicious Burger & Fries</h1>
        <p className='text-white text-sm xl:text-lg'>
          Progressively simplify effective e-toilers and process-centric methods
        of empowerment.Quickly pontificate parallel.
        </p>
       <CountDown/>
        <Link href="/menu/pastas"><button className='bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700'>Order Now</button></Link>
      </div>
      {/* Image*/}
      <div className='flex-1 w-full relative md:h-full'>
        <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offers