"use client";

import classNames from "@/util/classNames.util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./Burger";

import type { FC } from "react";

const Navigation: FC = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className="w-0 md:w-28 md:block">
        <ul
          className={classNames(
            `
              opacity-0
              w-full
              h-screen
              text-center
              m-0
              p-0
              fixed
              top-0
              bg-white
              flex
              flex-col
              justify-center
              z-[1]
              translate-y-full
              transition-opacity
              md:opacity-100
              md:w-28
              md:top-auto
              md:block
              md:translate-y-0
            `,
            active && "opacity-100 translate-y-0"
          )}
        >
          <li className="mb-7 text-3xl p-0 pr-6 last:mb-0 md:text-lg md:pr-0">
            <Link className={classNames(pathname === "/" && "text-gray-900 font-bold")} href="/">
              about
            </Link>
          </li>
          <li className="mb-7 text-3xl p-0 pr-6 last:mb-0 md:text-lg md:pr-0">
            <Link className={classNames(pathname.startsWith("/posts") && "text-gray-900 font-bold")} href="/posts">
              blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
