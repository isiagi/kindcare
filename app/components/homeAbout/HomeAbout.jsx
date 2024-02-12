import React from "react";

function HomeAbout() {
  return (
    <div className="px-5 py-32 bg-[#F9F7F6]">
      <div className="flex justify-between flex-wrap">
        <div>
          <h3 className="text-gray-600 font-semibold">About Us</h3>
          <h2 className="text-4xl text-[#4A4C70] font-light max-w-[350px] py-5">
            <span className="font-semibold">Help is Our</span> Main Goal Ever
          </h2>
          <button className="border-2 rounded-full py-3 px-10 mt-10 border-[#EFC940] text-xs">
            MORE ABOUT
          </button>
        </div>
        <div className="max-w-[800px]">
          <p className="text-gray-900 font-semibold">
            Thresher shark rudd African lungfish silverside, Red salmon rockfish
            grunion, garpike zebra danio king-of-the-salmon banjo catfish.
          </p>

          <p className="py-5 text-gray-600">
            Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
            Minnow snoek icefish velvet-belly shark, California halibut round
            stingray northern sea robin. Southern grayling trout-perch
          </p>

          <p className="pb-20 text-gray-600">
            Sharksucker sea toad candiru rocket danio tilefish stingray
            deepwater stingray Sacramento splittail, Canthigaster rostrata.
            Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri
            chimaera triplespine northern sea robin zingel lancetfish galjoen
            fish, catla wolffish, mosshead warbonnet grouper darter wels catfish
            mud catfish.
          </p>
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-[#5E5C8B] font-semibold">
                People We Helped on 2018
              </h2>
              <h2 className="text-5xl text-[#5E5C8B] font-bold pt-5">100</h2>
            </div>
            <div>
              <h2 className="text-[#5E5C8B] font-semibold">
                Dollars We Collected
              </h2>
              <h2 className="text-5xl text-[#5E5C8B] font-bold pt-5">$1000</h2>
            </div>
            <div>
              <h2 className="text-[#5E5C8B] font-semibold">Closed Projeccts</h2>
              <h2 className="text-5xl text-[#5E5C8B] font-bold pt-5">50</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
