import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <div className="bg-red-400 flex justify-between items-center px-5">
      <Image src="/images/care.png" alt="" width="80" height="80" />

      <ul className="flex gap-3">
        <li>Home</li>
        <li>About</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>

      <button>Donate</button>
    </div>
  );
}

export default Nav;
