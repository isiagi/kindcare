import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import HeaderBanner from "../headBanner/HeaderBanner";

function What() {
  return (
    <div className="py-32 px-5">
      <HeaderBanner
        heading={"What We do"}
        subtitle={"We do it"}
        subtitleText={"for all people"}
      />

      <div className="flex items-center justify-between pt-20 flex-wrap">
        <div className="text-center">
          <FaRegMoneyBillAlt className="text-7xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-3 text-[#4A4C70] font-semibold text-xl">Money</h2>
            <p className="leading-loose max-w-[300px] text-gray-500">
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
        <div className="text-center">
          <IoFastFoodOutline className="text-7xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-3 text-[#4A4C70] font-semibold text-xl">Food</h2>
            <p className="leading-loose max-w-[300px] text-gray-500">
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
        <div className="text-center">
          <MdOutlineCastForEducation className="text-7xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-3 text-[#4A4C70] font-semibold text-xl">
              Education
            </h2>
            <p className="leading-loose max-w-[300px] text-gray-500">
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
        <div className="text-center">
          <GiMedicines className="text-7xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-3 text-[#4A4C70] font-semibold text-xl">
              Medicine
            </h2>
            <p className="leading-loose max-w-[300px] text-gray-500">
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
