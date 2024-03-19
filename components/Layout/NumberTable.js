"use client";
import React, { useState, useEffect } from "react";
import beta from "../../public/assets/beta1.png";
import Link from "next/link";
import ButtonPrimary from "../misc/ButtonPrimary";
// import "./p2p.css";
// import { Link, NavLink } from "react-router-dom";

const NumberTable = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(2024, 3, 25); // Set the target date
      const diff = targetDate - now;
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" grid sm:grid-cols-3 text-center gap-4 ">
      <div className="py-3">
      <h1 className="text-2xl lg:text-2xl xl:text-2xl font-medium text-black-600 leading-normal">
            Countdown To Coinbidex
            </h1>
       
        <img src={beta} alt="" width={50} />
      </div>
      <div className=" grid sm:grid-cols-7  ">
        <div className="font-medium tracking-wide text-center py-3 px-3 align-middle border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue">
          {days}
          <span className="">DAYS</span>
        </div>
        <span className="font-medium tracking-wide text-center py-3 align-middle  text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 ">:</span>
        <div className="font-medium tracking-wide text-center  py-3 align-middle border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue">
          {hours}
          <span className=" ">HOURS</span>
        </div>
        <span className="font-medium tracking-wide text-center py-3 align-middle  text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 ">:</span>
        <div className="font-medium tracking-wide text-center  py-3 align-middle border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue">
          {minutes}
          <span className="">MINS</span>
        </div>
        <span className="font-medium tracking-wide text-center py-3 align-middle  text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 ">:</span>
        <div className="font-medium tracking-wide text-center  py-3 align-middle border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue">
          {seconds}
          <span className=" ">SECS</span>
        </div>
      </div>

      <div className="registerHead">
        <Link href="/whitelist">
        <ButtonPrimary>Whitelist</ButtonPrimary>
          
        </Link>
      </div>
    </div>
  );
};

export default NumberTable;
