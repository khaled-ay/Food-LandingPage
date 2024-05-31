import React from "react";
import image from "./../../restoassets/bg-title.png";
import { BiSolidLocationPlus } from "react-icons/bi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import "./contact.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="containers pt-12 bg-black" id="contact">
      <div className="flex gap-4 text-center w-full  items-center justify-center text-white content-image">
        <img src={image} />
        <h1 className="text-5xl font-bold">Contact</h1>
      </div>

      <div className="flex gap-4 justify-between items-center py-20 text-white contact-section">
        <div className="space-y-3">
          <div className="flex gap-3 items-center">
            <BiSolidLocationPlus className="text-2xl text-[#FFCE00]" />
            <h1 className="font-extrabold text-2xl uppercase">LOCATION</h1>
          </div>
          <p>2900 Lapeer Rd, Port Hurons</p>
        </div>
        <div className="space-y-3 ">
          <div className="flex gap-3 items-center">
            <BsFillTelephoneForwardFill className="text-xl text-[#FFCE00]" />
            <h1 className="font-extrabold text-2xl uppercase">Phone</h1>
          </div>
          <p className="text-xl font-bold text-[#FFCE00]">800 478 42 51</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 items-center  ">
            <MdEmail className="text-2xl text-[#FFCE00]" />
            <h1 className="font-extrabold text-2xl uppercase">Email</h1>
          </div>
          <p>smart2tech@gmail.com</p>
        </div>
        <div className="flex gap-8 items-center text-3xl text-[#FFCE00]">
          <a href="#">
            {" "}
            <BiLogoFacebook className="hover:text-gray-400" />{" "}
          </a>
          <a href="#">
            {" "}
            <BiLogoTwitter className="hover:text-gray-400" />{" "}
          </a>
          <a href="#">
            {" "}
            <BiLogoInstagram className="hover:text-gray-400" />{" "}
          </a>
          <a href="#">
            {" "}
            <BiLogoYoutube className="hover:text-gray-400" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
