import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
// import LogoVPN from "../../public/assets/Logo.svg";
import LogoVPN from "../../public/assets/New123.png";
import Image from "next/image";
import { IoGiftOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import NumberTable from "./NumberTable";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " ")
        }
      >
        <div className="hidden md:block">
          <NumberTable />
        </div>
        {/* <nav className=" px-3  sm:px-8 lg:px-36  mx-auto grid grid-flow-col py-3 sm:py-4">
      
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
       
          </ul>
          
          <div className="col-start-10 gap-3 col-end-12 font-medium flex justify-end items-center">
        
                <IoGiftOutline size={25}/>
         

              <RxQuestionMarkCircled size={25}/>
           

            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                  USD
              </a>
            </Link>
          </div>
        </nav> */}
        <div className="w-full text-gray-700 bg-cream">
          <div className="flex flex-col  px-8 py-4 mx-auto md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between ">
              <div className="relative ">
                <div
                  className="col-start-1 col-end-2 flex items-center"
                  style={{ width: "200px", height: "auto" }}
                >
                  <Image src={LogoVPN} />
                </div>
              </div>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(!open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    style={{ display: !open ? "block" : "none" }}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    style={{ display: open ? "block" : "none" }}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`${
                open ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:items-center pb-4 md:pb-0 transition duration-300 ease-in-out`}
            >
              <div
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "about"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Market
              </div>
              <div
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("feature");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "feature"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Trade
              </div>
              <div
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("pricing");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "pricing"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Features
              </div>
              <div
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "testimoni"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Copy Trading
              </div>
              <div
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "testimoni"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Earn
              </div>

              <div
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "testimoni"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Learn
              </div>
              <div className=" d-block  sm:hidden col-start-10 gap-3 col-end-12 font-medium flex  sm:justify-end items-center">
                <IoGiftOutline size={25} />
                <RxQuestionMarkCircled size={25} />
              <Link href="/">
                <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                    Sign In
                </a>
              </Link>
              <ButtonOutline>Sign Up</ButtonOutline>
              <Link href="/">
                <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                    USD
                </a>
              </Link>
            </div>
            </nav>
            <div className="hidden  sm:flex col-start-10 gap-3 col-end-12 font-medium flex w-100   items-center">
                <IoGiftOutline size={25} />
                <RxQuestionMarkCircled size={25} />
              <Link href="/">
                <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                    Sign In
                </a>
              </Link>
              <ButtonOutline>Sign Up</ButtonOutline>
              <Link href="/">
                <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                    USD
                </a>
              </Link>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
