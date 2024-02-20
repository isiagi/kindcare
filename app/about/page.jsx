"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Team from "../components/team/Team";
import Banner from "../components/banner/Banner";
import What from "../components/what/What";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

function Page() {
  return (
    <div>
      <div className="bg-[url('/images/cha1.jpg')] min-h-[50vh] bg-cover bg-center flex justify-center items-center">
        <h1>About</h1>
      </div>
      <div className="grid grid-cols-fluid px-5 py-10">
        <div>
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectet adipisicing elit. Quas, veniam
            nobis minima. Delectus, dolorem rerum, eos nemo dolore amet quis,
            eum debiti modi voluptatibus ducimus molestiae laborum itaque quam
            maxime dolor amit laboriosam aperiam exercitationem.Cos nemo dolore
            amet quis, eum debiti modi voluptatibus ducimus molestiae laborum
            itaque quam maxime dolor amit laboriosam aperiam exercitationem.
            Amit dolor sit.
          </p>
        </div>
        <div className="-z-10">
          <Slide indicators={true} arrows={false}>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <What />
      <Banner />
      <Team />
    </div>
  );
}

export default Page;
