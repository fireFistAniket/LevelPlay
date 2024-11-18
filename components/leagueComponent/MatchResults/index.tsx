import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import MatchResultCard from "./MatchResultCard";

export default function MatchResults() {
  const matchResults = [
    {
      team1: "Ars",
      team1logo: "/matchresultsteams/results-team-1.png",
      team1score: "2",
      time: "90:15",
      team2: "Ast",
      team2logo: "/matchresultsteams/results-team-2.png",
      team2score: "3",
    },
    {
      team1: "str",
      team1logo: "/matchresultsteams/results-team-3.png",
      team1score: "1",
      time: "55:00",
      team2: "mon",
      team2logo: "/matchresultsteams/results-team-4.png",
      team2score: "3",
    },
    {
      team1: "bol",
      team1logo: "/matchresultsteams/results-team-5.png",
      team1score: "0",
      time: "65:30",
      team2: "Ast",
      team2logo: "/matchresultsteams/results-team-2.png",
      team2score: "3",
    },
    {
      team1: "Ars",
      team1logo: "/matchresultsteams/results-team-1.png",
      team1score: "2",
      time: "30:25",
      team2: "nice",
      team2logo: "/matchresultsteams/results-team-6.png",
      team2score: "2",
    },
    {
      team1: "ren",
      team1logo: "/matchresultsteams/results-team-7.png",
      team1score: "2",
      time: "55:20",
      team2: "dzg",
      team2logo: "/matchresultsteams/results-team-8.png",
      team2score: "1",
    },
    {
      team1: "DOR",
      team1logo: "/matchresultsteams/results-team-9.png",
      team1score: "2",
      time: "60:00",
      team2: "SCF",
      team2logo: "/matchresultsteams/results-team-10.png",
      team2score: "0",
    },
  ];
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3 shadow-[0px_4px_35px_0px_#0000000F] border border-[#e7e7e7] bg-white overflow-hidden rounded-xl"
    >
      <AccordionItem
        value="item-1"
        className="p-3 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md"
      >
        <AccordionTrigger className="flex justify-between w-full items-center">
          <h2 className="text-primary font-bebas-neue text-2xl capitalize">
            match results
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <path
              stroke="#1E1E1E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 2v14M2 9h14"
            />
          </svg>
        </AccordionTrigger>
        <AccordionContent className="px-14 flex flex-col gap-10">
          {matchResults.map((data, index) => (
            <MatchResultCard key={index} {...data} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
