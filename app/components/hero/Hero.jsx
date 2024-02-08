import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="min-h-[80vh] px-5">
      <div className="grid grid-cols-fluid min-h-[80vh] gap-3 pt-[12vh]">
        <div className="relative -z-10">
          <Image
            src="/images/flyer.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 w-full h-full flex items-center"></div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="relative -z-10">
            <Image
              src="/images/cha2.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="absolute top-0 bg-gradient-to-r from-green-600/50 to-blue-500/50 w-full h-full flex items-center justify-center">
              <h2>Education Support</h2>
            </div>
          </div>
          <div className="grid grid-cols-fluid gap-3">
            <div>
              <Image
                src="/images/charity.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <Image
                src="/images/cha1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
