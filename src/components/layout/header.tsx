"use client";

import Link from "next/link";
import LocalClock from "../clock";

export default function Header() {
  return (
    <header className="left-0 right-0 mx-auto max-w-5xl px-4 sm:px-6 flex justify-center sm:justify-between h-24 items-center">
      <div className="hidden sm:flex items-center space-x-2 h-10 px-3 bg-cd-08 rounded-full border border-cd-13">
        <div className="h-2 w-2 rounded-full bg-green-500">
          <div className="relative animate-ping h-full w-full rounded-full bg-green-500 opacity-40"></div>
        </div>
        <span className="text-sm font-bold text-cg-3">Available for Work</span>
      </div>

      <nav className="mx-2 py-3 flex lg:hidden justify-center gap-2">
        <Link href="/">
          <button className="h-12 w-28 bg-cd-04 hover:bg-cd-07 border-cd-08 text-cg-9 rounded-md border text-sm focus:bg-cd-07 font-bold ">
            HOME
          </button>
        </Link>
        <Link href="/services">
          <button className="h-12 w-28 bg-cd-04 hover:bg-cd-07 border-cd-08 text-cg-9 rounded-md border text-sm focus:bg-cd-07 font-bold ">
            SERVICES
          </button>
        </Link>
        <Link href="/contact">
          <button className="h-12 w-28 bg-cd-04 hover:bg-cd-07 border-cd-08 text-cg-9 rounded-md border text-sm focus:bg-cd-07 font-bold ">
            CONTACT
          </button>
        </Link>
      </nav>

      {/* Local Time -sirf Desktop par ana chahiye */}
      <div className="hidden md:flex items-center h-10 gap-2">
        <div className="text-cg-1 gap-2 font-bold py-3">
          Local Time [IST]{" "}
        </div>
        <div className="w-28 text-cg-1 flex items-center font-bold bg-cd-08 rounded-lg h-10 border border-cd-13">
          <div className="mx-4"><LocalClock /></div>
        </div>
      </div>
    </header>
  );
}
