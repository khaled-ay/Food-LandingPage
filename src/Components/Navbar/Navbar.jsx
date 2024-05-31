import React, { useState } from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Logo from "./../../restoassets/logo.png";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    window.location.reload();
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <section
      className={` ${
        navbar ? "bg-black  drop-shadow-sm " : "bg-black  text-black "
      } sticky top-0 z-30 w-full containers py-3`}
    >
      <nav className="flex   justify-between items-center ">
        <div>
          <img src={Logo} alt="RestoFoodLogo" />
        </div>
        <div className="uppercase text-white font-extrabold text-lg space-x-11 md:flex hidden ">
          <a
            href="#home"
            className="hover hover:text-[#FFCE00] ease-linear transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover hover:text-[#FFCE00] ease-linear transition-all"
          >
            Aboutus
          </a>
          <a
            href="#cheifs"
            className="hover hover:text-[#FFCE00] ease-linear transition-all"
          >
            chefs
          </a>
          <a
            href="#menu"
            className="hover hover:text-[#FFCE00] ease-linear transition-all"
          >
            menu
          </a>
          <a
            href="#gallery"
            className="hover hover:text-[#FFCE00] ease-linear transition-all"
          >
            gallery
          </a>
          <a
            href="#contact"
            className="hover hover:text-[#FFCE00] ease-linear transition-all"
          >
            contacts
          </a>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 text-3xl cursor-pointer text-white"
        >
          {!nav ? <RxHamburgerMenu /> : <FaTimes />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute    sidebar  flex uppercase font-extrabold flex-col justify-center items-center space-y-6 text-2xl gap-3"
          }
        >
          <li>
            <a
              href="#"
              className="hover hover:text-[#FFCE00] ease-linear transition-all text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover hover:text-[#FFCE00] ease-linear transition-all text-white"
            >
              Aboutus
            </a>
          </li>
          <li>
            <a
              href="#cheifs"
              className="hover hover:text-[#FFCE00] ease-linear transition-all text-white"
            >
              chefs
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover hover:text-[#FFCE00] ease-linear transition-all text-white"
            >
              menu
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover hover:text-[#FFCE00] ease-linear transition-all text-white"
            >
              gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover hover:text-[#FFCE00] ease-linear transition-all text-white"
            >
              contacts
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
