import Image from 'next/image'
import React from 'react'
import { singleProduct } from '../../../../data'
import Price from '@/components/Price'

const product = () => {
  return (


    <div className='p-5 bg-black text-white lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row md:gap-4 md:items-center'>
{/*Image container*/}
{singleProduct.img && (
<div className='relative w-full h-1/2 items-center'>
    <Image src={singleProduct.img} alt="" fill className='object-contain'/>
</div>)}

{/*Text container*/}


<div className='h-1/2  flex flex-col gap-4 md:gap-4'>
  
  <h1 className='uppercase font-bold text-2xl md:text-4xl'>{singleProduct.title}</h1>
  <p>{singleProduct.desc}</p>
  <Price price={singleProduct.price}  id={singleProduct.id} options={singleProduct.options}/>
</div>


    </div>
  )
}

export default product