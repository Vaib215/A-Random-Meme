import React, { useState } from "react";
import Modeswitch from "./Modeswitch";
import Categories from "./Categories";
const btnClass =
  "block px-2 py-1 text-sm rounded-full text-blue-500 hover:text-orange-500 hover:bg-blue-100 uppercase duration-500";
function A(props) {
  return (
    <a href="#link" className={btnClass}>
      {props.text}
    </a>
  );
}

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const setTheme = () => {
    props.setMode(props.mode === "light" ? "dark" : "light")
    if (props.mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = props.mode==="light"?"dark":"light"
  }
  return (
    <header className={`w-full bg-blue-50 dark:bg-blue-900 mb-4 shadow-lg rounded-b-3xl fixed z-10 opacity-[0.9]`}>
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none ring-2 ring-inset ring-blue-400 hover:ring-orange-400 active:ring-orange-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-blue-400 bg-transparent hover:text-orange-400 active:text-orange-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* ::Navbar */}
        <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center md:justify-start text-base tracking-wide">
          <A text="Home" />
          <Categories/>
          <A text="About" />
          <A text="Contact" />
        </nav>
        {/* ::Site logo and Name */}
        <a
          href="#link"
          className="ml-auto md:ml-0 flex flex-shrink-0 justify-center lg:w-1/5 font-medium items-center text-gray-900 md:mb-0"
        >
          {/* Logo Here */}
          <span className=" hidden sm:inline ml-3 text-2xl text-blue-400 font-thin antialiased">
            A Random <span className="text-orange-500"> Meme</span>
          </span>
          <span className=" inline sm:hidden ml-3 text-2xl text-blue-500 font-thin antialiased">
            A R <span className="text-orange-500"> M</span>
          </span>
        </a>
        {/* Dark Mode Switch */}
        <div className="hidden md:flex lg:w-2/5 ml-auto md:ml-0 mr-4 md:mr-0 justify-end cursor-pointer" onClick={setTheme}>
          <Modeswitch sx={{ m: 1 }} />
        </div>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-wrap py-4 px-3 md:hidden bg-blue-50 dark:bg-blue-900 justify-center text-base uppercase">
          <A text="Home" />
          <Categories/>
          <A text="About" />
          <A text="Contact" />
          <Modeswitch
            sx={{ display: "inline-block", transform: "rotate(90deg)" }}
            onClick={setTheme}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
