import { Separator } from "@/components/ui/separator";
import MatchReplayCard from "./MatchReplayCard";

export default function MatchReplays() {
  const matchReplays = [
    {
      title: "Give Wallace Sititi the Breakthrough Player of the Year gong now",
      date: "2 days ago",
      views: "125K Views",
      cover: "/watchreplays/match-replays-cover-1.jpg",
      video: "/video/Recorded-Video-Feed-1.mp4",
    },
    {
      title: "Wallabies strike late to win thriller",
      date: "3 days ago",
      views: "320K Views",
      cover: "/watchreplays/match-replays-cover-2.jpg",
      video: "/video/Recorded-Video-Feed-2.mp4",
    },
    {
      title: "Ireland 'too desperate' in loss to New Zealand",
      date: "2 days ago",
      views: "225K Views",
      cover: "/watchreplays/match-replays-cover-3.jpg",
      video: "/video/Recorded-Video-Feed-1.mp4",
    },
    {
      title: "Behind the Broadcast: Big Noon Saturday",
      date: "1 days ago",
      views: "12K Views",
      cover: "/watchreplays/match-replays-cover-4.jpg",
      video: "/video/Recorded-Video-Feed-2.mp4",
    },
  ];
  return (
    <div className="flex flex-col gap-3 p-3 2xl:p-12 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md">
      <h1 className="font-bebas-neue text-3xl text-primary uppercase">
        match replays
      </h1>
      <Separator />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-5">
        {matchReplays.map((data, id) => (
          <MatchReplayCard
            key={id}
            title={data.title}
            date={data.date}
            views={data.views}
            cover={data.cover}
            video={data.video}
          />
        ))}
      </div>
    </div>
  );
}
