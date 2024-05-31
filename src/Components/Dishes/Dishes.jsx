import React from 'react'
import image from "./../../restoassets/bg-title.png"
import image1 from "./../../restoassets/special-dishes-1.png"
import image2 from "./../../restoassets/special-dishes-2.jpg"
import image3 from "./../../restoassets/special-dishes-3.jpg"
import image4 from "./../../restoassets/special-dishes-4.jpg"
import "./dishes.css"
const Dishes = () => {
  return (
    <section className='containers bg-black py-20 text-center text-white space-y-5'>
<div className='flex gap-4 text-center items-center justify-center text-white dishes'>
   <img src={image} />
   <h1 className='text-5xl font-bold'>OUR SPECIAL DISHES</h1>

</div>
<p className='max-w-2xl m-auto leading-8 text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
 labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt 
 hic eaque dolores.</p>
 <div className='swiper grid grid-cols-4 gap-4 py-7'>
  <div className='card space-y-6'>
    <img src={image1} alt=''  className='w-full'/>
    <h1 className='uppercase font-extrabold text-xl'>burger</h1>
    <p className='leading-7 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p className='font-bold text-xl text-[#FFCE00]'>$8.60</p>

  </div>
  <div className='card space-y-6'>
    <img src={image2} alt='' className='w-full' />
    <h1 className='uppercase font-extrabold text-xl'>pasta</h1>
    <p className='leading-7 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p className='font-bold text-xl text-[#FFCE00]'>$11.30</p>

  </div>
  <div className='card space-y-6'>
    <img src={image3} alt='' className='w-full'/>
    <h1 className='uppercase font-extrabold text-xl'>Beef burger meal</h1>
    <p className='leading-7 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p className='font-bold text-xl text-[#FFCE00]'>$10.30</p>

  </div>
  <div className='card space-y-6'>
    <img src={image4} alt='' className='w-full'/>
    <h1 className='uppercase font-extrabold text-xl'>double cheeze pizza</h1>
    <p className='leading-7 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p className='font-bold text-xl text-[#FFCE00]'>$15.00</p>

  </div>

 </div>
    </section>
  )
}

export default Dishes