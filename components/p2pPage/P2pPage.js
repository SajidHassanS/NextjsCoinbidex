import React, { useState, useEffect } from "react";
import PaymentMethod from "./PaymentMethod";
import RefreshSetting from "./RefreshSetting";
import CurrencyDropdown from "./CurrencyDropdown";
import Filter from "./Filter";
import Table from "./Table";
import Usdt from "./Usdt";
import NumberTable from "./NumberTable";
import BuySell from "./BuySell";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const P2pPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Initialize as true

  // useEffect(() => {
  //   // Function to handle window resize
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

    // Attach event listener to window resize
    // window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleViewMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="max-w-screen-xl  mt-44 px-18 xl:px-4 mx-auto sm:px-0 flex flex-col  ">
      <div className="aboveTable   flex flex-col mt-5 items-center gap-3 p-5 ">
        <NumberTable />
      </div>
      <div className="below flex flex-col bg-blue-200 rounded-lg p-5 mb-5">
        <div className="belowTable  flex justify-between items-center ">
          <BuySell />

            
            <>
              <Usdt />
              <CurrencyDropdown />
              <PaymentMethod />
              <RefreshSetting />
              <Filter />
            </>
        

      
        </div>
        <Table />
      </div>
    </section>
  );
};

export default P2pPage;
