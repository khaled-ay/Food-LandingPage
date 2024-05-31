import React from "react";
import "./offer.css";
const Offer = () => {
  return (
    <section className="py-20 offer-section containers">
      <div className=" space-y-5">
        <h1 className="text-4xl max-w-md font-extrabold">
          DOUBLE CHEESE PIZZA 30% OFF FRIDAY ONLY
        </h1>
        <div>
          <a href="#book">
            <button className="uppercase bg-[#FFCE00] text-black px-7 py-3 font-bold  text-xl hover:bg-gray-400 hover:text-white transition-all ease-linear">
              book a table
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offer;
