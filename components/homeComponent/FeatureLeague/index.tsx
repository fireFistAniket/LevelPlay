import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function FeatureLeague() {
  const leagues = [
    {
      label: "Paris Olympics",
      img: "/featureleague/club-icon-1.png",
    },
    {
      label: "Euro 2024",
      img: "/featureleague/club-icon-2.png",
    },
    {
      label: "Copa America",
      img: "/featureleague/club-icon-3.png",
    },
    {
      label: "IPL 2024",
      img: "/featureleague/club-icon-4.png",
    },
    {
      label: "English Premier League",
      img: "/featureleague/club-icon-5.png",
    },
    {
      label: "UEFA Champions League",
      img: "/featureleague/club-icon-6.png",
    },
  ];
  return (
    <div className="relative my-5">
      <Carousel pagination={false} className="relative">
        <CarouselContent className="">
          {leagues.map((league, index) => (
            <CarouselItem className="basis-1/3 lg:basis-1/6" key={index}>
              <Link
                href="/league"
                className="flex items-center border border-primary/30 justify-center gap-3 px-2 py-1 rounded bg-white hover:bg-primary/10 focus-within:bg-primary/10"
              >
                <div>
                  <Image
                    src={league.img}
                    alt="club"
                    width={56}
                    height={56}
                    className="size-10"
                  />
                </div>
                <h2 className="text-primary font-bebas-neue font-semibold text-xs">
                  {league.label}
                </h2>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
