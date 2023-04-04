/** @format */

import React, { useState } from "react";
import Image from "next/image";
import arrowImage from "../assets/arrow.png";
import axios from "axios";
import { Grid } from "react-loader-spinner";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);

  const submitHandler = async () => {
    setSending(true);
    await axios
      .post("/api/email", {
        email: email,
        name: name,
        message: message,
        phone: phone,
      })
      .then((res) => {
        setSended(true);
      })
      .catch((e) => {
        setSending(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-20 lg:px-32 bg-slate-200">
      <span className="text-2xl font-bold text-center">Contact Us</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <div className="bg-white rounded-xl w-[95%] lg:w-[75%] flex flex-col justify-center items-center mt-6 px-4 lg:px-20 py-10">
        {sending ? (
          sended ? (
            <>
              <span className="text-3xl font-bold text-center text-green-500">
                Email received
              </span>
              <br />
              <span className="font-semibold text-center">
                We will get back at you as soon as possible.
              </span>
            </>
          ) : (
            <Grid
              height="80"
              width="80"
              color="#000"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )
        ) : (
          <>
            <span className="font-bold text-lg text-start w-[90%] lg:w-[70%]">
              Name
            </span>
            <input
              type="text"
              placeholder="Type your Name"
              className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <span className="font-bold mt-4 text-lg text-start w-[90%] lg:w-[70%]">
              Email
            </span>
            <input
              type="text"
              placeholder="Type your Email"
              className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className="font-bold text-lg mt-4 text-start w-[90%] lg:w-[70%]">
              Phone No
            </span>
            <input
              type="text"
              placeholder="Type your Phone No (optional)"
              className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <span className="font-bold text-lg mt-4 text-start w-[90%] lg:w-[70%]">
              Message
            </span>
            <textarea
              placeholder="Type your Message"
              className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <br />
            <div className="w-[90%] lg:w-[70%]">
              <div
                className="flex w-[45%] lg:w-[26%] flex-row gap-2 justify-between items-center bg-[#603FBA] py-1 px-4 rounded-md cursor-pointer"
                onClick={submitHandler}
              >
                <span className="font-semibold text-white">Submit</span>
                <div className="animate-left-right">
                  <Image src={arrowImage} width={30} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes left-right {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-left-right {
          animation: left-right 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
