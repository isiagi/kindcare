import React from "react";

function HeaderBanner({ heading, subtitle, subtitleText }) {
  return (
    <div className="text-center">
      <h3 className="text-gray-400 font-semibold">{heading}</h3>
      <h2 className="text-4xl text-[#4A4C70] font-light pt-4">
        <span className="font-semibold">{subtitle}</span> {subtitleText}
      </h2>
    </div>
  );
}

export default HeaderBanner;
