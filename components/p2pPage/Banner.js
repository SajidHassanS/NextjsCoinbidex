import React, { useMemo, useState, useEffect } from "react";

import ButtonOutline from "../misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import banner from "../../public/assets/stacking/banner.svg";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Image from "next/image";
import { LuBookMarked } from "react-icons/lu";

const Banner = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="max-w-screen-xl  mt-24 px-18 xl:px-4 mx-auto">
      
       
      </div>
    </>
  );
};

export default Banner;
