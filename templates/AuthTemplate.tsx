import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function AuthTemplate({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  return (
    <main className="flex flex-col bg-[#f8f8f8]">
      <nav className="px-8 lg:px-16 py-8 lg:py-16">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={35}
            height={40}
            alt="LevelPlay"
            className="size-7 lg:size-10"
          />
          <Link
            href="/"
            className="font-bebas-neue text-xl 2xl:text-4xl xl:text-2xl lg:text-xl text-primary"
          >
            LEVEL Play
          </Link>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row relative justify-center items-center md:mx-12 gap-4 md:gap-28">
        <div className="">
          <Image
            src="/login-Screen-img.png"
            alt="LevelPlay"
            width={897}
            height={688}
            className="w-full md:w-[56rem]"
          />
        </div>
        <>{children}</>
      </div>
    </main>
  );
}
