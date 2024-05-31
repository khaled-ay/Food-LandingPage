import React from 'react'
import image from "./../../restoassets/bg-title.png"
import man1 from "./../../restoassets/chef-1.jpg"
import man2 from "./../../restoassets/chef-2.jpg"
import man3 from "./../../restoassets/chef-3.jpg"
import man4 from "./../../restoassets/chef-4.jpg"
import "./cheifs.css"
import {BiLogoFacebook,BiLogoTwitter,BiLogoInstagram} from "react-icons/bi"
const Cheifs = () => {
  return (
    <section className='containers  text-center text-white space-y-5 pt-28 color-change-2x' id='cheifs'>
    <div className='flex gap-4 text-center items-center justify-center text-white cheifs'>
       <img src={image} />
       <h1 className='text-5xl font-bold'>OUR BEST CHEF</h1>
    
    </div>
    <p className='max-w-2xl m-auto leading-8 text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores.</p>
     <div className='swiper grid grid-cols-4 gap-4 py-7'>
      <div className='card space-y-5'>
        <img src={man1} alt='' className="slide-fwd-center"/>
        <h1 className='uppercase font-extrabold text-xl'>RICHARD NAUZ</h1>
        <p className='leading-7 text-gray-400'>food chef</p>
        <div className='flex gap-3 justify-center items-center text-2xl text-[#FFCE00]'>
            <BiLogoFacebook/>
            <BiLogoTwitter/>
            <BiLogoInstagram/>
        </div>
    
      </div>
      <div className='card space-y-5'>
        <img src={man2} alt='' className="slide-fwd-center"/>
        <h1 className='uppercase font-extrabold text-xl'>OLIVIA GROSH</h1>
        <p className='leading-7 text-gray-400'>food chef</p>
        <div className='flex gap-3 justify-center items-center text-2xl text-[#FFCE00]'>
            <BiLogoFacebook/>
            <BiLogoTwitter/>
            <BiLogoInstagram/>
        </div>
    
      </div>
      <div className='card space-y-5'>
        <img src={man3} alt='' className="slide-fwd-center"/>
        <h1 className='uppercase font-extrabold text-xl'>HOWARD HOLMES</h1>
        <p className='leading-7 text-gray-400'>food chef</p>
        <div className='flex gap-3 justify-center items-center text-2xl text-[#FFCE00]'>
            <BiLogoFacebook/>
            <BiLogoTwitter/>
            <BiLogoInstagram/>
        </div>
    
      </div>
      <div className='card space-y-5'>
        <img src={man4} alt='' className="slide-fwd-center"/>
        <h1 className='uppercase font-extrabold text-xl'>JEREMY WHITE</h1>
        <p className='leading-7 text-gray-400'>food chef</p>
        <div className='flex gap-3 justify-center items-center text-2xl text-[#FFCE00]'>
            <BiLogoFacebook/>
            <BiLogoTwitter/>
            <BiLogoInstagram/>
        </div>
      </div>
    
     </div>
        </section>
  )
}

export default Cheifs