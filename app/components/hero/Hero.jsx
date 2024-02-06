import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="bg-blue-400 min-h-[90vh] px-5">
      <div className="grid grid-cols-fluid bg-purple-500 min-h-[80vh] gap-3">
        <div>
          <Image
            src="/images/one.jpg"
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
        <div className="flex flex-col justify-center gap-2">
          <div>
            <Image
              src="/images/one.jpg"
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
          <div className="grid grid-cols-fluid gap-3">
            <div>
              <Image
                src="/images/one.jpg"
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
                src="/images/one.jpg"
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
