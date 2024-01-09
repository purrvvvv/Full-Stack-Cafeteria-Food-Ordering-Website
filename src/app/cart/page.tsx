import Image from 'next/image'
import React from 'react'

const cart = () => {
  return (
    <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>
      {/*Product container*/}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 lg:px-40'>
       {/* Single Product*/}
       <div className='flex items-center justify-between mb-4'>
        <Image src="/temporary/p1.png" alt="" width={80} height={80}/>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className='font-bold'>$79.78</h2>
        <span className='cursor-pointer'>X</span>
       </div>
       {/* Single Product*/}
       <div className='flex items-center justify-between mb-4'>
        <Image src="/temporary/p1.png" alt="" width={80} height={80}/>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className='font-bold'>$79.78</h2>
        <span className='cursor-pointer'>X</span>
       </div>
       {/* Single Product*/}
       <div className='flex items-center justify-between mb-4'>
        <Image src="/temporary/p1.png" alt="" width={80} height={80}/>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className='font-bold'>$79.78</h2>
        <span className='cursor-pointer'>X</span>
       </div>
       </div>



       {/*payment container*/}
       <div className='h-1/2 p-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-20 lg:text-base lg:gap-7 '>
      <div className='flex justify-between'>
        <span>subtotal (3 items)</span>
        <span className=''>$81.70</span>
      </div>
      <div className='flex justify-between'>
        <span>Service Cost</span>
        <span className=''>$00.00</span>
      </div>
      <div className='flex justify-between'>
        <span>Delivery Cost</span>
        <span className='text-green-300'>FREE !!</span>
      </div>
      <hr className='my-2'/>
      <div className='flex justify-between'>
        <span>TOTAL(INCL.TAX)</span>
        <span className='font-bold text-red-600'>$81.09</span>
      </div>
      
      
        <button className='bg-orange-600 text-black p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
        </div>
      
    </div>
  )
}

export default cart