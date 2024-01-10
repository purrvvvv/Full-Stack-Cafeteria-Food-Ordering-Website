import Image from 'next/image'
import React from 'react'

import Price from '@/components/Price'
import { ProductType } from '@/types/types';

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id);

return(
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
  <Price product={singleProduct} />
</div>


    </div>
) 
}

export default SingleProductPage