import { Separator } from "@radix-ui/react-dropdown-menu";
import MatchCarousel from "./MatchCarousel";

export default function UpcomingMatch() {
  return (
    <div className="flex flex-col gap-3 p-3 2xl:p-12 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md">
      <h1 className="font-bebas-neue text-3xl text-primary uppercase">
        upcoming match
      </h1>
      <Separator />
      <MatchCarousel />
    </div>
  );
}
