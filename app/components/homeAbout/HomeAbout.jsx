import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

function HomeAbout() {
  return (
    <div className="px-5 py-20">
      <div className="flex justify-between flex-wrap">
        <div>
          <h3>About Us</h3>
          <h2>Kind Care</h2>
          <button className="border-2 rounded-full p-3">MORE ABOUT</button>
        </div>
        <div className="max-w-[700px]">
          <p>
            Thresher shark rudd African lungfish silverside, Red salmon rockfish
            grunion, garpike zebra danio king-of-the-salmon banjo catfish.
          </p>

          <p className="py-5">
            Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
            Minnow snoek icefish velvet-belly shark, California halibut round
            stingray northern sea robin. Southern grayling trout-perch
          </p>

          <p>
            Sharksucker sea toad candiru rocket danio tilefish stingray
            deepwater stingray Sacramento splittail, Canthigaster rostrata.
            Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri
            chimaera triplespine northern sea robin zingel lancetfish galjoen
            fish, catla wolffish, mosshead warbonnet grouper darter wels catfish
            mud catfish.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-16">
        <div className="text-center">
          <FaRegMoneyBillAlt className="text-8xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-2">Money</h2>
            <p>
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
        <div className="text-center">
          <IoFastFoodOutline className="text-8xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-2">Food</h2>
            <p>
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
        <div className="text-center">
          <MdOutlineCastForEducation className="text-8xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-2">Education</h2>
            <p>
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
        <div className="text-center">
          <GiMedicines className="text-8xl text-yellow-400 mx-auto" />
          <div>
            <h2 className="py-2">Medicine</h2>
            <p>
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
              Minnow snoek icefish velvet-belly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
