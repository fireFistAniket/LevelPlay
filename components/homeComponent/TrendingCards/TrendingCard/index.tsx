import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function TrendingCard({ img }: { img: string }) {
  return (
    <Card className="py-5 flex flex-col lg:flex-row">
      <CardContent className="self-stretch">
        <Image
          src={img}
          alt="card cover"
          width={265}
          height={265}
          className="rounded-lg w-full h-full object-cover"
        />
      </CardContent>
      <div>
        <CardHeader className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="py-1 px-4 bg-[#EB8F1C] text-xs text-white capitalize rounded-full">
              3 days ago
            </h3>
            <h3 className="text-xs text-primary">
              by <span className="font-semibold capitalize">john doe</span>
            </h3>
          </div>
          <CardTitle className="font-bebas-neue text-lg text-primary tracking-wide">
            Lorem Ipsum is simply dummy text of the printing industry&apos;s
            standard dummy text ever since.
          </CardTitle>
          <CardDescription className="line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </CardDescription>
          <button
            type="button"
            className="inline-flex gap-1 uppercase text-[#3876EF] font-bebas-neue text-sm 2xl:text-lg items-center"
          >
            <span>READ MORE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              fill="none"
            >
              <path
                fill="#3876EF"
                d="M1.094 3.963a.5.5 0 0 0 0 1v-1Zm9.973.853a.5.5 0 0 0 0-.707L7.885.927a.5.5 0 1 0-.707.707l2.829 2.829L7.178 7.29a.5.5 0 1 0 .707.707l3.182-3.182Zm-9.973.147h9.62v-1h-9.62v1Z"
              />
            </svg>
          </button>
        </CardHeader>
      </div>
    </Card>
  );
}
