import React from 'react'
import Link from 'next/link'

import { MenuType } from '@/types/types'

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

export const menupage = async () => {
  const menu:MenuType = await getData()
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen bg-black md:h-screen flex flex-col md:flex-row items-center'>
      {menu.map(category => (
        <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 md:h-1/2 bg-cover p-2 md:p-4 lg:p-8' style={{ backgroundImage: `url(${category.img})` }}>
          <div className={`text-${category.color} w-1/2 `}>
            <h1 className='uppercase font-bold text-base p-0.5 md:p-1 lg:p-3 '>{category.title}</h1>
            <p className='text-xs pb-4 '>{category.desc}</p>
            <button className={`hidden lg:block bg-black text-white py-2 px-4 rounded-md text-xs`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default menupage
