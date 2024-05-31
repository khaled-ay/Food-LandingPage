import React, { useState } from 'react'
import { gallery } from '../data';
import image from "./../../restoassets/bg-title.png"
import "./gallery.css"
const Gallery = () => {
    const [data, setData] = useState(gallery);
  return (
    <section className='containers bg-black  text-center text-white space-y-5 pt-28' id='gallery'>
    <div className='flex gap-4 text-center items-center justify-center text-white gallery-header'>
       <img src={image} alt='gallery'/>
       <h1 className='text-5xl font-bold'>GALLERY</h1>
    
    </div>
     <div className='grid grid-cols-3 py-5 gallery-images'>
     { data.map((item) => (
        <img src={item.galleryImage} key={item.id} alt='gallery' className='transition-all ease-linear  kenburns-top cursor-pointer'/>



       ))}
     
    
     </div>
        </section>
  )
}

export default Gallery