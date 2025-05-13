import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HeaderNavItemTypes } from "@/types";
import { ChevronDown } from "lucide-react";

const HEADER_NAV_ITEMS: HeaderNavItemTypes[] = [
  {
    label: "Courses",
    url: "/courses",
  },
  {
    label: "Price",
    url: "/pricing",
  },
  {
    label: "Resources",
    subItems: [
      { label: "Blog", url: "/blogs" },
      { label: "Podcast", url: "#" },
      { label: "Videos", url: "#" },
      { label: "Books", url: "#" },
      { label: "Articles", url: "#" },
      { label: "Quran", url: "#" },
      { label: "Tafseer", url: "#" },
      { label: "Quranic Arabic", url: "#" },
      { label: "Arabic", url: "#" },
    ],
  },
  {
    label: "Cart",
    url: "#",
  },
];

const MainHeader = () => {
  return (
    <header aria-describedby="main-header">
      <div className="container">
        <nav className="flex items-center justify-between bg-white h-24 py-1">
          <div
            aria-describedby="header-logo"
            className="flex items-center flex-shrink-0 flex-grow-0 basis-auto w-44"
          >
            <Link href={"/"} className="flex items-center w-full">
              <Image
                src={"/bayyinah-logo.jpg"}
                width={520}
                height={162}
                alt="bayyinah logo"
                priority
              />
            </Link>
          </div>

          <div aria-describedby="header-nav-lists" className="h-full flex-1 items-center justify-end hidden lg:flex">
            <ul className="flex items-center gap-12 h-full">
              {HEADER_NAV_ITEMS.map((nav) => (
                <React.Fragment key={nav.label}>
                  {nav.subItems ? (
                    <React.Fragment>
                      <li
                        aria-describedby="header-nav-item"
                        className="relative group/nav-item flex items-center h-full"
                      >
                        <span className="flex h-full items-center justify-center gap-x-1 text-xl font-medium text-neutral-900 cursor-pointer group-hover/nav-item:text-regal-blue-600">
                          {nav.label}
                          <ChevronDown className="transition-transform ease-in-out duration-300 group-hover/nav-item:-rotate-180" />
                        </span>

                        {/* sub menu */}
                        <ul className="absolute top-full z-50 right-0 shadow-sm p-2 space-y-2 bg-white border border-gray-300 invisible opacity-0 group-hover/nav-item:h-auto group-hover/nav-item:w-max group-hover/nav-item:visible group-hover/nav-item:opacity-100 transition-all ease-in-out duration-300 group-hover/nav-item:-translate-y-5">
                          {nav.subItems.map((subItem) => (
                            <li key={subItem.label}>
                              <Link href={subItem.url || "#"}>
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </React.Fragment>
                  ) : (
                    <li className="flex items-center h-full">
                      <Link href={nav.url || '#'} className="text-xl h-full font-medium text-neutral-900 flex items-center justify-center">{nav.label}</Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
