"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navArray = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Events",
    href: "/events",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

function Nav() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-200 z-100 flex justify-between items-center px-5 min-h-[10vh] fixed w-full">
      <Image src="/images/care.png" alt="" width="70" height="70" />

      <ul className="flex gap-7 font-semibold text-blue-400">
        {navArray.map(({ id, title, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <Link key={id} href={href} className={` `}>
              <li>{title}</li>
              <div
                className={`absolute h-[2px] w-[50px] bottom-0 ${
                  isActive ? "bg-[#FEE429]" : ""
                }`}
              />
            </Link>
          );
        })}
      </ul>

      <button className="bg-[#FEE429] text-white rounded-md px-4 py-2">
        Donate
      </button>
    </div>
  );
}

export default Nav;
