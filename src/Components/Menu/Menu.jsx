import React, { useEffect, useState } from "react";
import image from "./../../restoassets/bg-title.png";
import { items } from "./../../Components/data";
import "./menu.css";
const Menu = () => {
  const [selectedData, setSelectedData] = useState(["All"]);
  const [filterData, setFilterData] = useState(items);
  const filters = ["All", "Burgers", "Pizzas", "Pastas", "Drinks"];

  const handleClickButton = (selectedCategory) => {
    if (selectedData.includes(selectedCategory)) {
      let updatedFilters = selectedData.filter(
        (item) => item !== selectedCategory
      );
      setSelectedData(updatedFilters);
    } else {
      setSelectedData([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedData]);

  const filterItems = () => {
    if (selectedData.length === 1 && selectedData[0] !== "All") {
      const selectedCategory = selectedData[0];
      const filteredItems = items.filter(
        (item) => item.category === selectedCategory
      );
      setFilterData(filteredItems);
    } else {
      setFilterData(items);
    }
  };
  return (
    <section className="pt-28 menu-background containers" id="menu">
      <div className="flex gap-4 text-center items-center justify-center text-white menu">
        <img src={image} />
        <h1 className="text-5xl font-bold">OUR MENU</h1>
      </div>

      <div className="flex gap-7 justify-center items-center w-full py-7 flex-wrap">
        {filters.map((category, index) => (
          <button
            onClick={() => handleClickButton(category)}
            className={`button ${
              selectedData.includes(category)
                ? "bg-gray-400 px-5 py-2 font-extrabold uppercase text-white transition-all ease-linear text-lg"
                : "bg-[#FFCE00] px-5 py-2 font-extrabold uppercase text-black text-lg transition-all ease-linear"
            }`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5 w-full menu-grid">
        {filterData.map((data) => (
          <div className="drop-shadow-md menu-cards " key={data.id}>
            <img
              src={data.images}
              alt="website category "
              className="hover:opacity-50  w-full"
            />
            <div className="text-center space-y-4 py-6">
              <h1 className="font-extrabold text-xl">{data.name}</h1>
              <p className="leading-7 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-bold text-xl text-[#FFCE00]">$8.60</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
