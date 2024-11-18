import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function BlogCard({ img }: { img: string }) {
  return (
    <Card className="py-5">
      <CardContent>
        <Image
          src={img}
          alt="card cover"
          width={313}
          height={250}
          className="rounded-lg w-full"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="font-bebas-neue text-lg text-primary tracking-wide">
          Lorem Ipsum is simply dummy text of the printing industry&apos;s
          standard dummy text ever since.
        </CardTitle>
        <CardDescription className="lg:line-clamp-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
