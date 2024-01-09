import React from 'react'

const orders = () => {
  return (
    <div className='p-4 lg:px-40 bg-black text-white '>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base'>
            <td className='hidden md:block py-6 px-1'>1456432356</td>
            <td className='py-6 px-1'>19.07.2023</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big burger Menu(2),Veggie Pizza (2),Coca Cola 1L (2)</td>
            <td className='py-6 px-1 text-red-500'>On the way(approx. 10min)...</td>
          </tr>
          <tr className='text-sm md:text-base'>
            <td className='hidden md:block py-6 px-1'>1456432356</td>
            <td className='py-6 px-1'>19.07.2023</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big burger Menu(2),Veggie Pizza (2),Coca Cola 1L (2)</td>
            <td className='py-6 px-1  text-green-500'>Delivered</td>
          </tr>
          <tr className='text-sm md:text-base '>
            <td className='hidden md:block py-6 px-1'>1456432356</td>
            <td className='py-6 px-1'>19.07.2023</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big burger Menu(2),Veggie Pizza (2),Coca Cola 1L (2)</td>
            <td className='py-6 px-1  text-green-500'>Delivered</td>
          </tr>
          <tr className='text-sm md:text-base '>
            <td className='hidden md:block py-6 px-1'>1456432356</td>
            <td className='py-6 px-1'>19.07.2023</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big burger Menu(2),Veggie Pizza (2),Coca Cola 1L (2)</td>
            <td className='py-6 px-1  text-green-500'>Delivered</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default orders