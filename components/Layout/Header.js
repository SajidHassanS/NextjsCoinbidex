import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFingerprint } from "react-icons/fa";

// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";
// import LogoVPN from "../../public/assets/Logo.svg";
import LogoVPN from "../../public/assets/New123.png";
import Image from "next/image";
import { IoGiftOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import NumberTable from "./NumberTable";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import cash from "../../public/assets/cash.png";
import margin from "../../public/assets/margin.png";
import leveraged from "../../public/assets/leveraged.png";
import quick from "../../public/assets/quick.png";
import buy from "../../public/assets/buy.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [isTradeHovered, setIsTradeHovered] = useState(false);
  const [isLearnHovered, setIsLearnHovered] = useState(false);
  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

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
        <div className="w-full text-gray-700 bg-cream ">
          <div className="flex flex-col  px-8 py-3 mx-auto md:items-center md:justify-between md:flex-row relative">
            <div className="flex flex-row items-center justify-between ">
              <div className="relative ">
              <Link href="/">
                <div
                  className="col-start-1 col-end-2 flex items-center cursor-pointer"
                  style={{ width: "180px", height: "auto" }}
                >
                  <Image src={LogoVPN} />
                </div>
                </Link>
              </div>
              {/* hi saaji */}
              
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
               <Link href="/market">
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
              </Link>
              <div
                activeClass="active"
                to="trade"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("trade");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover  flex-col items-start relative flex " +
                  (activeLink === "trade"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
                onMouseEnter={() => setIsTradeHovered(true)}
                onMouseLeave={() => setIsTradeHovered(false)}
              >
                <div className="flex gap-2">
                  Trade{" "}
                  <div className="mt-1">
                    <span className={` `}>
                      {isTradeHovered ? (
                        <IoIosArrowUp className="" />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                </div>

                {isTradeHovered && (
                  <div className="md:absolute top-8 right-auto left-0 w-max  bg-white-500 rounded-lg  shadow-xl shadow-blue-200 mt-2">
                    <div className="p-4  w-full">
                      <div className=" w-full pr-2">
                        {/* Left side menu items here */}
                        <div className="w-full">
                        <div className="p-3 w-full  hover:bg-blue-100">
                         <Link href="/p2p"> <h3 className=" text-black-600 text-lg ">P2p</h3></Link>
                          <p>Buy & Sell on the spot</p>
                          </div>
                          <div className="p-3  w-full hover:bg-blue-100">
                          <h3 className=" text-black-600 text-lg ">Margin Trading</h3>
                          <p>Buy & Sells on the spot</p>
                          </div>
                          <div className="p-3 w-full hover:bg-blue-100">
                          <h3 className=" text-black-600 text-lg ">Crypto Pricing</h3>
                          <p>Buy & Sell on the spot</p>
                          </div>

                          <div className="p-3 w-full hover:bg-blue-100">
                          <h3 className=" text-black-600 text-lg ">Buy Crypto Via 3rd Party</h3>
                          <p>Buy & Sell on the spot</p>
                          </div>

                          <div className="p-3 w-full hover:bg-blue-100">
                          <h3 className=" text-black-600 text-lg ">Quick Buy & Swap</h3>
                          <p>Buy & Sell on the spot</p>
                          </div>

                        </div>
                      </div>
                      {/* <div className="w-1/2 pl-2">
                      
                        Right Side Slider
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/bidexpay">
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
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative " +
                  (activeLink === "pricing"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
              >
                Bidex Pay
              </div>
              </Link>
              <Link href="/copytrading">
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
              </Link>
              <Link href="/stacking">
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
              </Link>

              

<div
                activeClass="active"
                to="learn"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("learn");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover flex-col items-start relative flex md:items-center w-100" +
                  (activeLink === "learn"
                    ? " text-blue-800 animation-active "
                    : " text-black-500 hover:text-blue-800 a")
                }
                onMouseEnter={() => setIsLearnHovered(true)}
                onMouseLeave={() => setIsLearnHovered(false)}
              >
                <div className="flex gap-2">
                  Learn{" "}
                  <div className="mt-1">
                    <span className={` `}>
                      {isLearnHovered ? (
                        <IoIosArrowUp className="" />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                </div>

                {isLearnHovered && (
                  <div className="md:absolute top-8 right-auto left-0 w-max  bg-white-500 rounded-lg  shadow-xl shadow-blue-200 mt-2">
                    <div className="p-4  w-full">
                      <div className=" w-full pr-2">
                        {/* Left side menu items here */}
                        <div className="w-full">
                        <div className="p-3 w-full  hover:bg-blue-100">
                          <h3 className=" text-black-600 text-lg ">Discover</h3>
                          <p>Buy & Sell on the spot</p>
                          </div>
                          <div className="p-3  w-full hover:bg-blue-100">
                          <h3 className=" text-black-600 text-lg ">Digest</h3>
                          <p>Buy & Sells on the spot</p>
                          </div>
                       
                        </div>
                      </div>
                      {/* <div className="w-1/2 pl-2">
                      
                        Right Side Slider
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
              <div className=" flex justify-center gap-1  md:hidden col-start-10  col-end-12  font-medium    items-center">
                  <IoGiftOutline size={25} />
                  <RxQuestionMarkCircled size={25} />
                <Link href="/">
                  <span className="text-blue-800  sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                      Sign In
                  </span>
                </Link>
                <Link href="/whitelist">
                <ButtonOutline>Sign Up</ButtonOutline>
                </Link>
                <Link href="/">
                  <div className="text-black-600  sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                      USD
                  </div>
                </Link>
              </div>
            </nav>
            <div className="hidden  md:flex col-start-10 gap-3 col-end-12 font-medium  w-100   items-center">
                <IoGiftOutline size={25} />
                <RxQuestionMarkCircled size={25} />
              <Link href="/">
                <div className="flex items-center gap-2 text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                <FaFingerprint size={20} />      Sign In 

                </div>
              </Link>
              <Link href="/whitelist">
              <ButtonOutline>Sign Up</ButtonOutline>
              </Link>
              <Link href="/">
                <div className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-800 transition-all">
                    USD
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
