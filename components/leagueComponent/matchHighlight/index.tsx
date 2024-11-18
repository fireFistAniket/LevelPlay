import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function MatchHighLight() {
  return (
    <div className="flex flex-col gap-3 p-3 2xl:p-12 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md">
      <h1 className="font-bebas-neue text-3xl text-primary uppercase">
        match Highlights
      </h1>
      <Separator />
      <div className="flex flex-col gap-5">
        {Array.from({ length: 5 }).map((_, id) => (
          <div
            key={id}
            className="flex truncate 2xl:whitespace-normal 2xl:overflow-visible items-center"
          >
            <Image
              src="/play-button-dark.png"
              alt="play button"
              width={32}
              height={32}
              className="size-6"
            />
            <span className="flex-1 ps-2 text-xs lg:text-base text-primary">
              Laurens: Coote&apos;s Liverpool comments a terrible look for the
              Premier League
            </span>
            <span className="text-xs xl:text-base text-primary ps-2">
              20 mins long
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
