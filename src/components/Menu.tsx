"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import Carticon from './Carticon';

const Menu = () => {
    const [open, setOpen] = useState(false)
    const user= false;
  return (
    <div>
        {!open ? (
        <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)} />
        ) 
        : (
        <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
        ) }

        {open &&(
        <div className='bg-orange-700 text-black absolute left-0 top-29 w-full h-screen flex flex-col gap-8 items-center justify-center text-3xl z-10'>
        <Link href="/" onClick={()=>setOpen(false)}>Homepage </Link>
        <Link href="/menu" onClick={()=>setOpen(false)}>Menu</Link>
        <Link href="/" onClick={()=>setOpen(false)}>Contacts</Link>


        <Link href="/cart" onClick={()=>setOpen(false)}>
            <Carticon/>
        </Link>


        { ! user ? <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
        :
        <Link href="/cart" onClick={()=>setOpen(false)}>Orders</Link>}
        
        </div>
        )}
    </div>
  );
};

export default Menu