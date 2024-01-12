import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Carticon from './Carticon'
import Image from 'next/image'
import UserLinks from './UserLinks'

const Navbar = () => {
  const user=false
  return (

    <div className='h-8 bg-orange-600 text-black p-4 flex  items-center justify-between border-b-2 border-b-black uppercase md:h-24 lg:px-20 xl:px-40'>
     
      {/*Left links*/}
     <div className='hidden md:flex gap-7 flex-1 justify-start font-semibold'>
      <Link href="/">Homepage </Link>
        <Link href="/menu">Menu</Link>
        <Link href="">Contact</Link>
     </div>
      {/*logo*/}

      <div className='text-xl md:font-extrabold flex-1 md:text-center' >
        <Link href="/">Cafeteria</Link>
      </div>
      {/*Mobile menu*/}
      <div className='md:hidden'>
        <Menu/>
      </div>
       {/*Right links*/}
      <div className='hidden md:flex gap-7 items-center cursor-pointer flex-1 justify-end font-semibold' >
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>8690915317</span>
        </div>
  
         <UserLinks/>
         <Carticon/>
     </div>
     
    </div>
  )
}

export default Navbar