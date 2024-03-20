import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "../misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import TickerNews from "./Ticker";
import { HiSpeakerphone } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="max-w-screen-xl mt-24 px-18 xl:px-8 mx-auto" id="about">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl  text-black-600 leading-normal">
                Buy & Sell Digital Assets on{" "}
                <strong className="text-blue-800">Coinbidex</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Coinbidex is the easiest, safest and fastest way to buy & sell
                crypto assets.
              </p>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="" variants={scrollAnimation}>
                {/* <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                /> */}
                <div className="py-2 px-2 mt-8   sm:px-4  shadow-lg shadow-blue-800/50  rounded-large ">
                  <iframe
                    width="500"
                    height="700"
                    // className='payment-card'
                    allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
                    src="https://flooz.xyz/embed/trade?swapDisabled=false&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=true&onRampTokenAddress=0xd16Cb89F621820bC19DAE1C29c9DB6D22813b01D&onRampLockToken=true&stakeDisabled=true&network=bsc&lightMode=true&primaryColor=%230052fe&backgroundColor=transparent&roundedCorners=32&padding=40&refId=pMRL54"
                  ></iframe>

                  {/* <img src={img1} alt="Rockie" /> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
      </div>
      <div className="bg-gradient-to-r py-2 d-flex grid-cols-12 flex-col from-blue-800 to-blue-200">
        {/* <div className="sm:mx-80   col-span-2">
          <HiSpeakerphone color="white" size={25} />
        </div> */}
        <div className="py-3 col-span-8">
          <TickerNews />
        </div>
        {/* <div className="sm:mx-80  col-span-2" style={{float:"right"}}>
          <BsArrowRightShort color="white" size={25} />
        </div> */}
      </div>
    </>
  );
};

export default Hero;
