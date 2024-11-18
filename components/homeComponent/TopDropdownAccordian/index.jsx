import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function TopDropDownAccordian() {
  const featureSports = [
    {
      id: "1",
      title: "Hockey",
      img: "/sportsicon/sports-logo-1.png",
    },
    {
      id: "2",
      title: "Badminton",
      img: "/sportsicon/sports-logo-2.png",
    },
    {
      id: "3",
      title: "Wrestling",
      img: "/sportsicon/sports-logo-3.png",
    },
    {
      id: "4",
      title: "Rugby",
      img: "/sportsicon/sports-logo-4.png",
    },
    {
      id: "5",
      title: "Cricket",
      img: "/sportsicon/sports-logo-5.png",
    },
  ];
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      className="w-full flex flex-col gap-3"
    >
      <AccordionItem
        value="item-1"
        className="p-3 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md"
      >
        <AccordionTrigger className="">
          <div className="flex items-center gap-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                d="M17.027 9.966c0 5.029-3.48 9.73-8.154 10.872C4.198 19.697.719 14.995.719 9.966V4.53L8.873.906l8.154 3.624v5.436Zm-8.154 9.06c3.397-.906 6.342-4.946 6.342-8.86V5.708L8.873 2.881 2.53 5.708v4.458c0 3.914 2.944 7.954 6.342 8.86Zm2.763-4.53-2.79-1.676-2.782 1.676.734-3.17-2.455-2.12 3.243-.282 1.26-2.99 1.268 2.981 3.244.281-2.465 2.13.743 3.17Z"
              />
            </svg>
            <h2 className="text-primary font-bebas-neue text-lg xl:text-2xl">
              Featured Sports
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="">
          {featureSports.map((sport) => (
            <div
              key={sport.id}
              className="flex py-2 px-3 gap-3 hover:bg-[#3876ef] hover:text-white rounded-md"
            >
              <Image
                src={sport.img}
                alt="sports"
                width={27}
                height={27}
                className="size-4"
              />
              <h3 className="text-xs xl:text-base font-semibold">
                {sport.title}
              </h3>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="p-3 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md"
      >
        <AccordionTrigger>
          <div className="flex items-center gap-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                fillRule="evenodd"
                d="M.727 5.392a.9.9 0 0 1 .9-.9h9.277a.9.9 0 0 1 0 1.8H1.627a.9.9 0 0 1-.9-.9Zm0-3.6a.9.9 0 0 1 .9-.9h12.6a.9.9 0 0 1 0 1.8h-12.6a.9.9 0 0 1-.9-.9Zm0 7.2a.9.9 0 0 1 .9-.9h12.6a.9.9 0 0 1 0 1.8h-12.6a.9.9 0 0 1-.9-.9Zm0 3.6a.9.9 0 0 1 .9-.9h9.277a.9.9 0 1 1 0 1.8H1.627a.9.9 0 0 1-.9-.9Z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-primary font-bebas-neue text-lg xl:text-2xl">
              Top Headlines
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex py-2 px-3 gap-3">
              <h3 className="text-sm font-semibold truncate">
                Webb admits to VAR error before Ten Hag...
              </h3>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="p-3 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md"
      >
        <AccordionTrigger>
          <div className="flex items-center gap-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                d="M12 .5C9.93.5 8.25 2.18 8.25 4.25 8.25 6.32 9.93 8 12 8c2.07 0 3.75-1.68 3.75-3.75C15.75 2.18 14.07.5 12 .5Zm0 6a2.247 2.247 0 0 1-2.25-2.25A2.247 2.247 0 0 1 12 2a2.247 2.247 0 0 1 2.25 2.25A2.247 2.247 0 0 1 12 6.5Zm2.25 4.5h-1.5c0-.9-.563-1.71-1.402-2.025L6.728 7.25H.75v8.25h4.5v-1.08l5.25 1.455 6-1.875v-.75A2.247 2.247 0 0 0 14.25 11Zm-10.5 3h-1.5V8.75h1.5V14Zm6.727.307L5.25 12.875V8.75h1.207l4.365 1.627a.668.668 0 0 1 .428.623s-1.5-.037-1.725-.113l-1.785-.592-.473 1.425 1.785.592c.383.128.78.188 1.186.188h4.012c.293 0 .555.18.675.428l-4.448 1.38Z"
              />
            </svg>
            <h2 className="text-primary font-bebas-neue text-lg xl:text-2xl">
              Charitable EVENTS
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex py-2 px-3 gap-3">
              <h3 className="text-sm font-semibold truncate">
                Webb admits to VAR error before Ten Hag...
              </h3>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
