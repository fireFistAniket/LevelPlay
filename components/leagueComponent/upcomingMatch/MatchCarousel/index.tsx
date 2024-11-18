import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MatchCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        pagination={false}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <Card className="border-0 rounded-none w-full">
                <CardContent className="flex items-center 2xl:items-stretch justify-center relative px-0 rounded-md overflow-hidden">
                  <Image
                    src="/upcoming-cover.png"
                    alt="upcoming"
                    width={934}
                    height={418}
                    className="w-full min-h-[444px] object-cover self-stretch"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary/35 backdrop-blur-lg w-full py-5 px-3 2xl:px-10 flex flex-col gap-2">
                    <h1 className="text-[#f5f5f5] font-bebas-neue text-3xl">
                      Exeter Chiefs Women 40 - 19 Loughborough Lightning
                    </h1>
                    <h3 className="text-[#f5f5f5]/70 text-sm">
                      Date : 15th December,2024
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
