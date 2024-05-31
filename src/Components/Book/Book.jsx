import React from "react";
import image from "./../../restoassets/bg-title.png";
import "./book.css";
const Book = () => {
  return (
    <section className="containers pt-28 book-section" id="book">
      <div className="flex gap-4 text-center items-center justify-center text-white book-header">
        <img src={image} />
        <h1 className="text-5xl font-bold">BOOK A TABLE</h1>
      </div>

      <div className="w-full py-10 flex gap-9 book">
        <div className="w-[60%] book-part1">
        <form className="grid grid-cols-2 gap-4 book-form">
          <label className="flex flex-col gap-2  text-[#FFCE00] font-bold">
            Name:
            <input placeholder="Name" type="text" />
          </label>

          <label className="flex flex-col gap-2  text-[#FFCE00] font-bold">
            Last Name:
            <input placeholder="last Name" type="text" />
          </label>

          <label className="flex flex-col gap-2  text-[#FFCE00] font-bold">
            Phone:
            <input placeholder="Phone" type="number" />
          </label>

          <label className="flex flex-col gap-2  text-[#FFCE00] font-bold">
            Email:
            <input placeholder="Email" type="email" />
          </label>

          <label className="flex flex-col gap-2  text-[#FFCE00] font-bold">
            Date:
            <input placeholder="mm-dd-yy" type="text" />
          </label>

          <label className="flex flex-col gap-2  text-[#FFCE00] font-bold">
            Time:
            <input type="text" placeholder="12:00AM" />
          </label>
        </form>
        <button className="uppercase bg-[#FFCE00] text-black px-3  mt-3 py-2 
        font-bold  text-x hover:bg-gray-400 transition-all ease-linear hover:text-white">
          book a table
        </button>
        </div>
        

        <div className="w-[40%] space-y-5 book-part2">
          <h1 className="font-extrabold text-3xl">OPENING HOURS</h1>
          <p className="text-gray-400 leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
            inventore hic nulla, provident laudantium voluptate ipsa eligendi
            commodi mollitia vero animi, repudiandae quidem minima est sint
            sapiente quas iure deleniti.
          </p>
          <div className="flex justify-between  items-center time-underline">
            <h1>Monday - Friday</h1>
            <h1>8AM - 6PM</h1>
          </div>
          <div className="flex justify-between  items-center time-underline">
            <h1>Saturday</h1>
            <h1>9AM - 5PM</h1>
          </div>
          <div className="flex justify-between items-center time-underline">
            <h1>Sunday</h1>
            <h1>9AM - 4PM</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
