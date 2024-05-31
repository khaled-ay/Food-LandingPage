import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className="header-section containers py-10 " id="home">
        <div className="space-y-5 text-white  header ">
          <h1 className="text-7xl font-extrabold max-w-2xl uppercase ">
            BEST QUALITY FOOD
          </h1>
          <p className="max-w-xl leading-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            provident laborum, recusandae delectus corrupti reprehenderit error
            distinctio eligendi qui consequuntur officia.
          </p>

          <button className="uppercase bg-[#FFCE00] text-black px-7 py-3 font-bold  text-xl hover:text-white hover:bg-gray-400 transition-all ease-linear">
            <a href="#book"> book a table </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
