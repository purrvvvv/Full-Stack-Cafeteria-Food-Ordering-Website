"use client"
import React, { useState, useEffect } from 'react';


type Props={
    price:number;
    id:number;
    options?:{title:string; additionalPrice:number }[];
};

const Price = ({price,id,options}:Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
      
        setTotal(
            quantity*(options ? price + options[selected].additionalPrice : price)
        )
    
      return () => {
        
      }
    }, [quantity,selected,options,price])
    


  return (
    <div className='flex flex-col gap-2 md:gap-6'>
        <h2 className='text-xl md:text-2xl font-bold text-orange-600'>${total.toFixed(2)}</h2>
        {/*options container*/}
        <div className='flex gap-4'>
            {options?.map((option,index) =>(
            <button key={option.title} className=' min-w-[6rem] p-2 ring-1 ring-orange-600 rounded-lg'
            style={{
                background: selected===index ? "rgb(234 88 12)": "black",
                color: selected=== index ? "black" : "white"
            }}
            onClick={()=> setSelected(index)}
            >{option.title}</button>
        ))}
        </div>
        {/*quantity and addbutton*/}
        <div className='flex justify-between items-center gap-3'>

            <div className='flex justify-between w-full p-3 ring-1 ring-orange-600'>
                <span>Quantity</span>
                <div className='flex gap-3 items-center'>
                    <button onClick={()=> setQuantity((prev) => (prev>1 ? prev-1 :1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=> setQuantity((prev) => (prev<9 ? prev+1 : 9))}>{'>'}</button>
            </div>
            </div>


            {/*cart button*/}
            <button className='uppercase w-56 bg-orange-600 text-black p-3'>Add to cart</button>

        </div>

    </div>
  
  )
}

export default Price