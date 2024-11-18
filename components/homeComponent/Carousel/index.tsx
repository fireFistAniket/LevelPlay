import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function HomeCarousel() {
  const data = [
    {
      cover: "/homecarousel/carousel-cover-1.png",
      bg: "/homecarousel/carousel-bg-1.jpg",
    },
    {
      cover: "/homecarousel/carousel-cover-2.png",
      bg: "/homecarousel/carousel-bg-2.jpg",
    },
    {
      cover: "/homecarousel/carousel-cover-3.png",
      bg: "/homecarousel/carousel-bg-3.jpg",
    },
  ];
  return (
    <div className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {data.map((item, index) => {
            const { cover, bg } = item;
            return (
              <CarouselItem
                key={index}
                style={{
                  backgroundImage: `url('${bg}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col gap-0 lg:gap-24 xl:gap-32 2xl:gap-40 lg:flex-row justify-normal lg:justify-center items-center bg-[linear-gradient(358deg,_#000000_-0.42%,_rgba(0,_0,_0,_0)_99.48%)] px-3 py-0 2xl:px-32 2xl:py-3 h-full">
                  <div className="flex flex-col px-4 mt-16 gap-3 flex-shrink">
                    <h1 className="font-bebas-neue text-7xl lg:text-8xl xl:text-9xl text-white ">
                      Exciting game this week
                    </h1>
                    <button
                      type="button"
                      className="bg-[#CC4545] inline-flex items-center justify-center gap-1 py-2 lg:py-3 w-32 xl:w-44 2xl:w-52 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="27"
                        fill="none"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.375"
                          d="M14.047 25.75c6.558 0 11.875-5.317 11.875-11.875S20.605 2 14.047 2C7.488 2 2.172 7.317 2.172 13.875S7.488 25.75 14.047 25.75Z"
                        />
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.375"
                          d="M11.078 10.271c0-.566 0-.85.119-1.008a.594.594 0 0 1 .433-.236c.197-.015.435.139.912.445l5.606 3.604c.413.266.62.399.692.568a.594.594 0 0 1 0 .462c-.072.17-.279.302-.692.568l-5.606 3.604c-.477.306-.715.46-.912.445a.593.593 0 0 1-.433-.236c-.119-.158-.119-.442-.119-1.008V10.27Z"
                        />
                      </svg>
                      <span className="font-semibold text-xs lg:text-sm xl:text-base text-white">
                        Watch Live
                      </span>
                    </button>
                  </div>
                  <div className="self-stretch">
                    <Image
                      src={cover}
                      alt="carousel cover"
                      width={960}
                      height={570}
                      className="h-fit"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
