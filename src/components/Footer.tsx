import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-14 text-xs md:h-16 lg:h-16 md:text-sm p-4 lg:p-10 lg:text-lg xl:p-20 xl:text-xl bg-orange-600 text-black font-semibold flex items-center justify-between">
      <Link href="/" className="uppercase font-black">BASKETBALL CLUB HOMEPAGE</Link>
      <Link href="https://purrvvvv.github.io/BASKETBALL/" className="uppercase font-extrabold text-2xl">Cafeteria</Link>
      
      <p className='text-sm'>@PurvShah All rights reserved</p>
      

    </div>
  )
}

export default Footer