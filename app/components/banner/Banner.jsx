import React from "react";

function Banner() {
  return (
    <div className="bg-[url('/images/cha1.jpg')] bg-cover bg-center bg-[#4A4C70] bg-blend-overlay py-28">
      <div className="text-center">
        <h2 className="text-2xl text-white">Join us now to make your impact</h2>
        <p className="max-w-[600px] mx-auto py-10 leading-loose text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis egestas rhoncus Donec facilisis fermentum sem, ac viverra
          ante luctus vel. Donec vel mauris quam.
        </p>
        <button className="border-2 rounded-full p-3 border-[#EFC940] text-white mt-10">
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
