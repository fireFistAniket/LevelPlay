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
      <div>
        <>{children}</>
      </div>
    </main>
  );
}
