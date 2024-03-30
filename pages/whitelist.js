import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Importing required icons
import Layout from "../components/Layout/Layout.js";
import ButtonOutline from "../components/misc/ButtonOutline.js";

const Whitelist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [discord, setDiscord] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
    setDiscord("");
    setAgreeTerms(false);

    // Show modal on successful form submission
    setShowModal(true);
  };

  return (
    <Layout>
      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${showModal ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-50 w-auto max-w-3xl mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-300 outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Success!</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Form submitted successfully!
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Open
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white-300 -mt-[5.5rem]">
        <div className="overflow-hidden rounded-b-large bg-white pt-[20.5rem] pb-34">
          <div className="relative hidden lg:block mt-36 w-full flex justify-center items-center">
            <div className="absolute  start-1/2 -translate-x-1/2 px-[3.125rem] bottom-[70%] left-[50%]">
              <div className="absolute bottom-3/4 h-[216px] w-36 -translate-x-1/2  border-x-2 border-[#272727] 2xl:h-60   translate-x-[70%] "></div>
              <div className="mx-auto  rotate-12 rounded-[1.75rem] bg-white  shadow-[4px_16px_0_#272727] ring-2 ring-inset ring-[#272727] min-w-[358px] p-6">
                <div className="divide-y divide-[#272727] overflow-hidden rounded-[1.25rem] ring-1 ring-[#272727]">
                  <div className="bg-blue-400  px-2 pb-1.5 pt-2.5 text-center text-xl/8 font-semibold text-[#272727] 2xl:pb-3 2xl:pt-4 2xl:text-2xl">
                    Coinbidex Whitelist
                  </div>
                  <div className="break-all px-5 pb-3.5 pt-5.5 text-center text-5xl font-semibold uppercase text-[#D9D9D9]  2xl:pt-4.5 text-6xl/[5.5rem]">
                    Open
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto bg-blue-200 max-w-[800px] px-7 py-15  rounded-[2.5rem] px-26 pt-14">
            <div className="mx-auto my-10 ">
              <h1 className="mb-5 flex justify-center font-display text-4xl/none 2xl:text-4xl">
                The Coinbidex Whitelist is now Open.
              </h1>
              <form className="mainForm w-100 " onSubmit={handleSubmit}>
                <div className="my-3 flex justify-center w-100  " >
                  <div className="relative flex items-center">
                    <AiOutlineUser className="text-black-500 absolute left-3" />
                    <input
                      type="text"
                      className="form-control py-3 px-3 rounded-lg pl-10"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={{width:"100%"}} />
                  </div>
                </div>
                <div className="my-3 flex justify-center  ">
                  <div className="relative flex items-center">
                    <AiOutlineMail className="text-black-500 absolute left-3" />
                    <input
                      type="email"
                      className="form-control py-3 px-3 rounded-lg pl-10"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{width:"100%"}}  />
                  </div>
                </div>
                <div className="my-3 flex justify-center ">
                  <div className="relative flex items-center">
                    <AiOutlineLock className="text-black-500 absolute left-3" />
                    <input
                      type="password"
                      className="form-control py-3 px-3 rounded-lg pl-10"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{width:"100%"}}  />
                  </div>
                </div>
                <div className="my-3 gap-3 flex justify-center form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeTermsCheckbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    style={{ transform: "scale(1.5)" }}
                    required
                  />
                  <label
                    className="my-3 flex justify-center form-check-label"
                    htmlFor="agreeTermsCheckbox"
                  >
                    I agree to the Terms & Conditions.
                  </label>
                </div>
                <div className="flex justify-center">
                  <ButtonOutline onClick={handleSubmit}>Whitelist</ButtonOutline>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Whitelist;
