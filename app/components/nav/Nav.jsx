import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <div className="bg-red-400 flex justify-between items-center px-5 min-h-[10vh]">
      <Image src="/images/care.png" alt="" width="70" height="70" />

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
