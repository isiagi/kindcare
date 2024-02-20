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
    <div className="bg-white z-100 flex justify-between items-center px-5 min-h-[10vh] fixed w-full shadow-[rgba(0,0,15,0.3)_0px_4px_4px_0px]">
      <Image src="/images/navpic.jpg" alt="" width="70" height="70" />

      <ul className="flex gap-12 text-md list-disc">
        {navArray.map(({ id, title, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <Link key={id} href={href} className={` `}>
              <li
                className={` ${
                  isActive ? "text-[#5C5E8B]" : "text-slate-800"
                } hover:text-[#5C5E8B]`}
              >
                {title}
              </li>
              <div
                className={`absolute h-[3px] w-[50px] top-[2px] ${
                  isActive ? "bg-[#EFC940] transition-all duration-1000" : ""
                }`}
              />
            </Link>
          );
        })}
      </ul>

      <button className="bg-[#EFC940] text-white rounded-md px-4 py-2">
        Donate
      </button>
    </div>
  );
}

export default Nav;
