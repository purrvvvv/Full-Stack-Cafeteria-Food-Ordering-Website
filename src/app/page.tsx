import Featured from '@/components/Featured'
import Offers from '@/components/Offers'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Slider/>
    <Featured/>
    <Offers/>
   </main>
  )
}
