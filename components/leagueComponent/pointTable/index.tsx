import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";

const invoices = [
  {
    teams: "Liverpool",
    icon: "/tableclubicons/league-teams-logo-1.png",
    GP: "8",
    W: "6",
    D: "2",
    L: "0",
    GD: "12",
    P: "25",
  },
  {
    teams: "Sporting CP",
    icon: "/tableclubicons/league-teams-logo-2.png",
    GP: "7",
    W: "5",
    D: "2",
    L: "0",
    GD: "10",
    P: "28",
  },
  {
    teams: "AS Monaco",
    icon: "/tableclubicons/league-teams-logo-3.png",
    GP: "7",
    W: "5",
    D: "2",
    L: "0",
    GD: "10",
    P: "25",
  },
  {
    teams: "Brest",
    icon: "/tableclubicons/league-teams-logo-4.png",
    GP: "7",
    W: "4",
    D: "3",
    L: "0",
    GD: "8",
    P: "25",
  },
  {
    teams: "Internazionale",
    icon: "/tableclubicons/league-teams-logo-5.png",
    GP: "7",
    W: "3",
    D: "4",
    L: "0",
    GD: "6",
    P: "28",
  },
  {
    teams: "Barcelona",
    icon: "/tableclubicons/league-teams-logo-6.png",
    GP: "8",
    W: "3",
    D: "5",
    L: "0",
    GD: "6",
    P: "25",
  },
  {
    teams: "Aston Villa",
    icon: "/tableclubicons/league-teams-logo-7.png",
    GP: "7",
    W: "2",
    D: "5",
    L: "0",
    GD: "4",
    P: "25",
  },
  {
    teams: "Atalanta",
    icon: "/tableclubicons/league-teams-logo-8.png",
    GP: "7",
    W: "1",
    D: "6",
    L: "0",
    GD: "2",
    P: "25",
  },
  {
    teams: "Manchester City",
    icon: "/tableclubicons/league-teams-logo-9.png",
    GP: "7",
    W: "4",
    D: "3",
    L: "0",
    GD: "8",
    P: "25",
  },
  {
    teams: "Juventus",
    icon: "/tableclubicons/league-teams-logo-10.png",
    GP: "7",
    W: "3",
    D: "4",
    L: "0",
    GD: "6",
    P: "28",
  },
  {
    teams: "Lille",
    icon: "/tableclubicons/league-teams-logo-11.png",
    GP: "8",
    W: "3",
    D: "5",
    L: "0",
    GD: "6",
    P: "25",
  },
  {
    teams: "Celtic",
    icon: "/tableclubicons/league-teams-logo-12.png",
    GP: "7",
    W: "2",
    D: "5",
    L: "0",
    GD: "4",
    P: "25",
  },
  {
    teams: "Real Madrid",
    icon: "/tableclubicons/league-teams-logo-13.png",
    GP: "7",
    W: "1",
    D: "6",
    L: "0",
    GD: "2",
    P: "25",
  },
  {
    teams: "Benfica",
    icon: "/tableclubicons/league-teams-logo-14.png",
    GP: "7",
    W: "3",
    D: "4",
    L: "0",
    GD: "6",
    P: "28",
  },
  {
    teams: "AC Milan",
    icon: "/tableclubicons/league-teams-logo-15.png",
    GP: "8",
    W: "3",
    D: "4",
    L: "0",
    GD: "6",
    P: "25",
  },
  {
    teams: "Girona",
    icon: "/tableclubicons/league-teams-logo-16.png",
    GP: "7",
    W: "2",
    D: "5",
    L: "0",
    GD: "4",
    P: "25",
  },
  {
    teams: "PSV Eindhoven",
    icon: "/tableclubicons/league-teams-logo-17.png",
    GP: "7",
    W: "1",
    D: "6",
    L: "0",
    GD: "2",
    P: "25",
  },
  {
    teams: "Atlético Madrid",
    icon: "/tableclubicons/league-teams-logo-18.png",
    GP: "7",
    W: "5",
    D: "2",
    L: "0",
    GD: "10",
    P: "25",
  },
];

export default function PointTable() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full flex flex-col gap-3 shadow-[0px_4px_35px_0px_#0000000F] border border-[#e7e7e7] bg-white overflow-hidden rounded-xl"
    >
      <AccordionItem
        value="item-1"
        className="p-3 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md"
      >
        <AccordionTrigger className="flex justify-between w-full items-center">
          <h2 className="text-primary font-bebas-neue text-2xl">
            Points Table
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
        <AccordionContent className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px] text-primary text-base font-bold">
                  Teams
                </TableHead>
                <TableHead className="text-base font-bold text-primary">
                  GP
                </TableHead>
                <TableHead className="text-base font-bold text-primary">
                  W
                </TableHead>
                <TableHead className="text-base font-bold text-primary">
                  D
                </TableHead>
                <TableHead className="text-base font-bold text-primary">
                  L
                </TableHead>
                <TableHead className="text-base font-bold text-primary">
                  GD
                </TableHead>
                <TableHead className="text-base font-bold text-primary">
                  P
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((data, index) => (
                <TableRow key={index} className="">
                  <TableCell className="font-medium text-[#372294] w-[120px] inline-flex items-center gap-2">
                    <Image
                      src={data.icon}
                      alt="teams logo"
                      width={20}
                      height={20}
                    />
                    <span className="text-xs font-medium">{data.teams}</span>
                  </TableCell>
                  <TableCell className="text-base font-medium text-primary/70">
                    {data.GP}
                  </TableCell>
                  <TableCell className="text-base font-medium text-primary/70">
                    {data.W}
                  </TableCell>
                  <TableCell className="text-base font-medium text-primary/70">
                    {data.D}
                  </TableCell>
                  <TableCell className="text-base font-medium text-primary/70">
                    {data.L}
                  </TableCell>
                  <TableCell className="text-base font-medium text-primary/70">
                    {data.GD}
                  </TableCell>
                  <TableCell className="text-base font-medium text-primary/70">
                    {data.P}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
