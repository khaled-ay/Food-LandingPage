import React from "react";
import advantage1 from "./../../restoassets/advantage-1.png";
import advantage2 from "./../../restoassets/advantage-2.png";
import advantage3 from "./../../restoassets/advantage-3.png";
import aboutImage from "./../../restoassets/about-big.jpg";
import title from "./../../restoassets/bg-title.png";
import "./about.css";
const About = () => {
  return (
    <section className=" py-20 about-background containers" id="about">
      <div className="flex gap-9  w-full about-section">
        <div className="about-image w-[45%]  about-part1">
          <img src={aboutImage} alt="about-image" />
        </div>
        <div className="w-[55%] space-y-9 about-part2">
          <div className="flex items-center gap-3">
            <img src={title} alt="title" className="title-about"/>
            <h1 className="text-4xl font-extrabold">
              GOOD FOOD FOR YOUR ALL DAY GOOD MOOD
            </h1>
          </div>
          <div className="text-gray-400 space-y-8 leading-8">
            <p>
              Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque
              dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi
              nobis, vero expedita voluptate dignissimos officiis quis pariatur
              earum voluptas quia sed.
            </p>
            <p>
              Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque
              dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi
              nobis, vero expedita voluptate dignissimos officiis quis pariatur
              earum voluptas quia sed.
            </p>
            <p>
              Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque
              dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi
              nobis, vero expedita voluptate dignissimos officiis quis pariatur
              earum voluptas quia sed.
            </p>
          </div>
          <div className="flex  text-center justify-between py-5 advantage">
            <div className="space-y-5">
              <img src={advantage1} alt="" className="m-auto" />
              <h1 className="text-md font-extrabold">EXPERIENCED CHEFS</h1>
            </div>
            <div className="space-y-5">
              <img src={advantage2} alt="" className="m-auto" />
              <h1 className="text-md font-extrabold">ORIGINAL RECIPES</h1>
            </div>
            <div className="space-y-5">
              <img src={advantage3} alt="" className="m-auto" />
              <h1 className="text-md font-extrabold">FRESH INGREDIENTS</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
