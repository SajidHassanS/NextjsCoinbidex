import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import visa from "../../public/assets/bank/visa.png"
import payoneer from "../../public/assets/bank/payoneer.png"
import pay from "../../public/assets/bank/pay.png"
import banx from "../../public/assets/bank/banx.png"
import mercuryo from "../../public/assets/bank/mercuryo.png"
import moonpay from "../../public/assets/bank/moonpay.png"
import simplex from "../../public/assets/bank/simplex.png"
import paygoogle from "../../public/assets/bank/paygoogle.png"
import ButtonOutline from "../misc/ButtonOutline";




const BuyCrypto = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col  justify-center ml-auto w-full "
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl  mb-6 font-medium leading-relaxed text-black-600">
              Buy crypto with Easy
            </h3>
            <p className="my-2 text-black-500">
              Buy crypto immediately with Google Pay or Credit Card. Unlimited
              swaps to hundreds of cryptocurrencies.
            </p>
           
            
                <motion
                  className="flex gap-3 py-4"
                 
                >
                    <Image src={visa} width={80} height={40} />
                    <Image src={payoneer} width={80} height={40} />
                    <Image src={pay} width={80} height={40} />
                    <Image src={paygoogle} width={80} height={40} />
                 
                </motion>
                <motion className="py-4 mb-6">
                    <hr/>
                </motion>

             
            <motion>
        
            <h3 className="text-xl lg:text-xl font-medium leading-relaxed text-black-600">
            or buy using third-party methods
            </h3>
            <p className="my-2 text-black-500">
            Conveniently buy digital currency using third-party payment.
            </p>
           
            </motion>
                <motion
                  className="flex gap-3 py-4  "
                 
                >
                  <div
                  className="col-start-1 col-end-2 flex items-center"
                  style={{ width: "100px", height: "auto" }}
                >
                  <Image src={banx} />
                </div>
                    {/* <div className="w-25">
                    <Image src={banx} width={100} />
                    </div> */}
                      <div
                  className="col-start-1 col-end-2 flex items-center"
                  style={{ width: "100px", height: "auto" }}
                >
                  <Image src={mercuryo} />
                </div>
                <div
                  className="col-start-1 col-end-2 flex items-center"
                  style={{ width: "100px", height: "auto" }}
                >
                  <Image src={moonpay} />
                </div>
                <div
                  className="col-start-1 col-end-2 flex items-center"
                  style={{ width: "100px", height: "auto" }}
                >
                  <Image src={simplex} />
                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                   
                   
                    
                 
                </motion>
                <motion>
                    <ButtonOutline>Start Trading</ButtonOutline>
                </motion>
            

             
            
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default BuyCrypto;
