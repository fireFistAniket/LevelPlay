import Image from "next/image";
import HeaderTabs from "./headerTabs";
import { useState } from "react";
import HeaderTabsDesktop from "./headerTabsDesktop";

export default function HeaderTab() {
  const [current, setCurrent] = useState<string>("home");
  return (
    <header className="flex mt-2 px-4 my-2 lg:my-4 2xl:px-36 xl:px-28 lg:px-20 border-b border-black">
      <div className="flex gap-1 lg:gap-6 mr-2 lg:mr-9">
        <Image
          src="/league-logo.png"
          alt="league"
          width={56}
          height={56}
          className="w-9 lg:w-14 object-contain"
        />
        <h1 className="font-semibold text-base xl:text-lg text-primary self-center">
          Rugby Premier League
        </h1>
      </div>
      <div className="py-5 border-l border-black flex lg:hidden items-center px-4 gap-7">
        <div>
          <h2 className="capitalize">{current}</h2>
        </div>
        <HeaderTabs position={current} setPosition={setCurrent} />
      </div>
      <div className="hidden lg:flex items-center justify-center py-5 border-l border-black">
        <HeaderTabsDesktop />
      </div>
    </header>
  );
}
