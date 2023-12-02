import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
    // const nav = document.querySelector(".nav");
    // nav.classList.toggle("hidden");
  };

  return (
    <div>
      <div className=" flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            Advisor Career
          </Link>
        </div>
        <nav className=" hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6c6cbe] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6c6cbe] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6c6cbe] transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="Reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6c6cbe] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#6c6cbe] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className=" flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenuUnfold size={22} />
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
          // } flex-col gap-5 font-medium p-1 cursor-pointer`}
        } ms:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transition duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#6c6cbe] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#6c6cbe] transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#6c6cbe] transition-all cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#6c6cbe] transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
