import Image from "next/image";
import React from "react";

import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#20212B] py-14">
      <div className="px-5">
        <div className="flex justify-between">
          <div>
            <Image src="/images/navpic.jpg" alt="" width={80} height={80} />
            <div className="flex gap-5 pt-5 text-slate-400">
              <AiOutlineFacebook />
              <BsTwitterX />
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="leading-loose text-slate-400">
            <h3 className="text-white pb-4 font-semibold text-xl">Contacts</h3>
            <p>Elliott Ave, Parkville VIC 3052,</p>
            <p>Melbourne Canada</p>
            <p>Phone: +31 85 964 47 25</p>
            <p>Email: support@helpo.org</p>
          </div>
          <div className="leading-loose text-slate-400">
            <h3 className="text-white pb-4 font-semibold text-xl">
              Menu & Links
            </h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="leading-loose max-w-[300px] text-slate-400">
            <h3 className="text-white pb-4 font-semibold text-xl">Donate</h3>
            <p>Help Us Change the Lives of Children in World</p>
            <button className="bg-[#EFC940] w-full py-2 rounded-full text-[#20212B] mt-5">
              Donate
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center pt-12 text-slate-400">
          <p>&copy; KindCare 2024</p>
          <p>Create by WittyLoop Tech</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
