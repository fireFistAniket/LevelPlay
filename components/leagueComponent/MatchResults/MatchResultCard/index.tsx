import Image from "next/image";

export default function MatchResultCard({
  team1,
  team1logo,
  team1score,
  team2,
  team2logo,
  team2score,
  time,
}: {
  team1: string;
  team1logo: string;
  team2: string;
  team1score: string;
  team2logo: string;
  team2score: string;
  time: string;
}) {
  return (
    <div className="flex flex-col first:mt-16">
      <div className="flex items-center">
        <div className="bg-[#F5F5F5] rounded-full p-3">
          <Image
            src={team1logo}
            alt="team 1"
            width={47}
            height={47}
            className=""
          />
        </div>
        <div className="bg-[#F5F5F5] outline outline-[#f5f5f5] flex-1 text-center font-bebas-neue text-3xl">
          {team1score} - {team2score}
        </div>
        <div className="bg-[#F5F5F5] rounded-full p-3">
          <Image
            src={team2logo}
            alt="team 2"
            width={47}
            height={47}
            className=""
          />
        </div>
      </div>
      <div className="flex items-center mx-4">
        <div className="uppercase text-center font-bebas-neue text-lg p-3 font-semibold">
          {team1}
        </div>
        <div className="flex-1 text-center font-bebas-neue text-base">
          {time}
        </div>
        <div className="text-center font-bebas-neue p-3 text-lg font-semibold uppercase">
          {team2}
        </div>
      </div>
    </div>
  );
}
