import { Separator } from "@/components/ui/separator";
import WatchCard from "./WatchCard";

export default function Watch() {
  const liveWatches = [
    {
      title: "Rugby's autumn internationals to trial 20-minute red cards",
      views: "655K Views",
      cover: "/watchlive/watch-thumb-1.png",
      video: "/video/Live-Video-Feed.mp4",
    },
    {
      title: "Musiala stunner sees Bayern edge St. Pauli",
      views: "728K Views",
      cover: "/watchlive/watch-thumb-2.png",
      video: "/video/Live-Video-Feed.mp4",
    },
    {
      title: "Henry Slade and Ben Spencer to start All Blacks Test",
      views: "850K Views",
      cover: "/watchlive/watch-thumb-3.png",
      video: "/video/Live-Video-Feed.mp4",
    },
    {
      title: "Freddie Steward exclusive interview",
      views: "850K Views",
      cover: "/watchlive/watch-thumb-4.png",
      video: "/video/Live-Video-Feed.mp4",
    },
  ];
  return (
    <div className="flex flex-col gap-3 p-3 2xl:p-12 xl:p-8 lg:p-4 shadow-[0px_4.28px_37.46px_0px_#0000000F] border border-[#e7e7e7] bg-white rounded-md">
      <h1 className="font-bebas-neue text-3xl text-primary">WATCH</h1>
      <Separator />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-5">
        {liveWatches.map((live, id) => (
          <WatchCard title={live.title} views={live.views} cover={live.cover} video={live.video} />
        ))}
      </div>
    </div>
  );
}
