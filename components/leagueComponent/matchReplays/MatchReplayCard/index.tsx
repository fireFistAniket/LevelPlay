import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export default function MatchReplayCard({
  title,
  views,
  cover,
  date,
  video,
}: {
  title: string;
  views: string;
  cover: string;
  date: string;
  video: string;
}) {
  return (
    <Card>
      <CardHeader className="relative">
        <Image
          src={cover}
          alt="watch1"
          width={465}
          height={314}
          className="rounded w-80 md:w-full h-fit object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog>
            <DialogTrigger asChild className="cursor-pointer">
              <Image src="/play-button.png" alt="play" width={50} height={50} />
            </DialogTrigger>
            <DialogContent className="w-full max-w-fit">
              <video className="h-full w-full rounded-lg" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <div className="flex justify-between">
            <h1 className="text-base font-bebas-neue text-primary">
              <span>{title}</span>
              <span className="text-xs text-primary/50 ps-2">{date}</span>
              <span className="text-xs text-primary/50 ps-2">{views}</span>
            </h1>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}