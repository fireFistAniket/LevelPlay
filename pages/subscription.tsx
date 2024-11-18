import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";

export default function Subscription() {
  const { toast } = useToast();

  return (
    <>
      <nav className="fixed left-0 top-0 w-full flex justify-between items-center h-12 lg:h-20 bg-primary px-4 py-4 2xl:px-36 xl:px-28 lg:px-20 z-[1100]">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={35}
            height={40}
            alt="LevelPlay"
            className="size-7 lg:size-10"
          />
          <Link
            href="/"
            className="font-bebas-neue text-xl 2xl:text-4xl xl:text-2xl lg:text-xl text-white"
          >
            LEVEL Play
          </Link>
        </div>
      </nav>
      <main className="mt-16 lg:mt-24">
        <div className="flex flex-col mx-4 2xl:mx-36">
          <h1 className="text-primary text-base md:text-xl font-semibold">
            Subscription Checkout
          </h1>
          <div className="mt-9 md:mt-12 flex flex-col lg:flex-row justify-between gap-24">
            <div className="flex flex-col gap-9 md:gap-12 flex-1">
              <div className="flex flex-col gap-7">
                <h2 className="text-2xl font-semibold text-primary">
                  Contact Info
                </h2>
                <div className="bg-[#d9d9d9]/30 py-4 px-6 md:px-11 rounded-lg">
                  <h3 className="text-base font-medium text-primary/50">
                    abc@xyz.com
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <h2 className="text-2xl font-semibold text-primary">Payment</h2>
                <div className="bg-[#d9d9d9]/30 py-4 px-6 md:px-11 rounded-lg flex justify-between">
                  <div className="flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      fill="none"
                    >
                      <rect width="28" height="20" fill="url(#a)" rx="3" />
                      <path
                        fill="#fff"
                        d="M14.11 8.918c-.011.836.744 1.302 1.313 1.58.585.284.781.467.78.721-.005.39-.467.561-.9.568-.754.012-1.193-.204-1.541-.367l-.272 1.272c.35.161.998.302 1.67.308 1.576 0 2.608-.778 2.613-1.985.006-1.532-2.118-1.616-2.104-2.301.005-.208.203-.43.637-.485.215-.029.808-.05 1.48.259l.264-1.23A4.024 4.024 0 0 0 16.646 7c-1.485 0-2.528.789-2.537 1.918Zm6.476-1.812a.684.684 0 0 0-.638.426l-2.253 5.378h1.576l.313-.867h1.926l.182.867h1.388l-1.212-5.804h-1.282Zm.22 1.568.455 2.18h-1.245l.79-2.18ZM12.2 7.106l-1.242 5.804h1.501L13.7 7.106h-1.501Zm-2.221 0-1.563 3.95-.632-3.359c-.074-.375-.367-.591-.693-.591H4.536l-.036.168c.524.114 1.12.298 1.481.494.221.12.284.225.357.51l1.197 4.632h1.587l2.433-5.804H9.978Z"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="12.578"
                          x2="19.042"
                          y1="20"
                          y2=".662"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#222357" />
                          <stop offset="1" stop-color="#254AA5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-base text-primary font-semibold">
                      . . . .6878
                    </span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="text-base font-semibold text-primary/50 inline-flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                      >
                        <path
                          fill="#1E1E1E"
                          fillOpacity=".5"
                          d="M9.643 5.183a1 1 0 0 0-1.537 1.28l1.537-1.28ZM12.189 9.8l.768.64a1 1 0 0 0 0-1.28l-.768.64Zm-4.083 3.338a1 1 0 1 0 1.537 1.28l-1.537-1.28Zm0-6.675 3.315 3.978 1.536-1.28-3.314-3.978-1.537 1.28Zm3.315 2.697-3.315 3.978 1.537 1.28 3.314-3.977-1.536-1.28ZM10 2a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10v2Zm8 8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10h-2Zm-8 8a8 8 0 0 1-8-8H0c0 5.523 4.477 10 10 10v-2Zm-8-8a8 8 0 0 1 8-8V0C4.477 0 0 4.477 0 10h2Z"
                        />
                      </svg>
                      <span>Link</span>
                    </div>
                    <button type="button">
                      <svg
                        width="6"
                        height="20"
                        viewBox="0 0 6 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.99998 5.20039C1.67449 5.20039 0.599976 4.12587 0.599976 2.80039C0.599976 1.47491 1.67449 0.400391 2.99998 0.400391C4.32546 0.400391 5.39998 1.47491 5.39998 2.80039C5.39998 4.12587 4.32546 5.20039 2.99998 5.20039Z"
                          fill="#0F66B4"
                        />
                        <path
                          d="M2.99998 12.4004C1.67449 12.4004 0.599976 11.3259 0.599976 10.0004C0.599976 8.67491 1.67449 7.60039 2.99998 7.60039C4.32546 7.60039 5.39998 8.67491 5.39998 10.0004C5.39998 11.3259 4.32546 12.4004 2.99998 12.4004Z"
                          fill="#0F66B4"
                        />
                        <path
                          d="M2.99998 19.6004C1.67449 19.6004 0.599976 18.5259 0.599976 17.2004C0.599976 15.8749 1.67449 14.8004 2.99998 14.8004C4.32546 14.8004 5.39998 15.8749 5.39998 17.2004C5.39998 18.5259 4.32546 19.6004 2.99998 19.6004Z"
                          fill="#0F66B4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-[#d9d9d9]/30 py-4 px-6 md:px-11 rounded-lg flex justify-between">
                  <div className="flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      fill="none"
                    >
                      <rect width="28" height="20" fill="#01326F" rx="3" />
                      <path
                        fill="#FF5F00"
                        d="M16.331 5.283h-5.25v9.434h5.25V5.283Z"
                      />
                      <path
                        fill="#EB001B"
                        d="M11.415 10.001a5.99 5.99 0 0 1 2.291-4.718 6 6 0 1 0 0 9.434 5.989 5.989 0 0 1-2.291-4.716Z"
                      />
                      <path
                        fill="#F79E1B"
                        d="M23.413 10a6 6 0 0 1-9.707 4.717 6 6 0 0 0 0-9.434A5.999 5.999 0 0 1 23.413 10v.002Z"
                      />
                    </svg>
                    <span className="text-base text-primary font-semibold">
                      . . . .5278
                    </span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="text-base font-semibold text-primary/50 inline-flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                      >
                        <path
                          fill="#1E1E1E"
                          fillOpacity=".5"
                          d="M9.643 5.183a1 1 0 0 0-1.537 1.28l1.537-1.28ZM12.189 9.8l.768.64a1 1 0 0 0 0-1.28l-.768.64Zm-4.083 3.338a1 1 0 1 0 1.537 1.28l-1.537-1.28Zm0-6.675 3.315 3.978 1.536-1.28-3.314-3.978-1.537 1.28Zm3.315 2.697-3.315 3.978 1.537 1.28 3.314-3.977-1.536-1.28ZM10 2a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10v2Zm8 8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10h-2Zm-8 8a8 8 0 0 1-8-8H0c0 5.523 4.477 10 10 10v-2Zm-8-8a8 8 0 0 1 8-8V0C4.477 0 0 4.477 0 10h2Z"
                        />
                      </svg>
                      <span>Link</span>
                    </div>
                    <button type="button">
                      <svg
                        width="6"
                        height="20"
                        viewBox="0 0 6 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.99998 5.20039C1.67449 5.20039 0.599976 4.12587 0.599976 2.80039C0.599976 1.47491 1.67449 0.400391 2.99998 0.400391C4.32546 0.400391 5.39998 1.47491 5.39998 2.80039C5.39998 4.12587 4.32546 5.20039 2.99998 5.20039Z"
                          fill="#0F66B4"
                        />
                        <path
                          d="M2.99998 12.4004C1.67449 12.4004 0.599976 11.3259 0.599976 10.0004C0.599976 8.67491 1.67449 7.60039 2.99998 7.60039C4.32546 7.60039 5.39998 8.67491 5.39998 10.0004C5.39998 11.3259 4.32546 12.4004 2.99998 12.4004Z"
                          fill="#0F66B4"
                        />
                        <path
                          d="M2.99998 19.6004C1.67449 19.6004 0.599976 18.5259 0.599976 17.2004C0.599976 15.8749 1.67449 14.8004 2.99998 14.8004C4.32546 14.8004 5.39998 15.8749 5.39998 17.2004C5.39998 18.5259 4.32546 19.6004 2.99998 19.6004Z"
                          fill="#0F66B4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-[#d9d9d9]/30 py-4 px-6 md:px-11 rounded-lg flex justify-between">
                  <h2 className="text-[#3876ef] text-sm font-semibold cursor-pointer">
                    New Payment Method
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:min-w-[519px] rounded-2xl border-[0.5px] border-[#bdbdbd] p-10 md:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-5 mb-5">
                <span className="text-primary/50 text-base md:text-xl font-medium">
                  Subtotal
                </span>
                <span className="text-primary/50 text-base md:text-xl font-medium text-right">
                  $40.25
                </span>
                <span className="text-primary/50 text-base md:text-xl font-medium">
                  Shipping
                </span>
                <span className="text-primary/50 text-base md:text-xl font-medium text-right">
                  Free
                </span>
              </div>
              <Separator />
              <div className="grid grid-cols-2 justify-between mt-5">
                <h1 className="text-xl md:text-2xl font-semibold">Total</h1>
                <h1 className="text-xl md:text-2xl font-semibold text-right">
                  $40.25 /m
                </h1>
              </div>
              <Link
                href="/"
                onClick={() => {
                  toast({
                    title: "Subscription Complete",
                    description: new Date().toLocaleString("en-US", {
                      weekday: "long", // Full weekday name (e.g., "Friday")
                      year: "numeric", // Full year (e.g., 2023)
                      month: "long", // Full month name (e.g., "February")
                      day: "numeric", // Day of the month (e.g., 10)
                      hour: "2-digit", // Hour in 2-digit format (e.g., "05")
                      minute: "2-digit", // Minute in 2-digit format (e.g., "57")
                      hour12: true, // Use 12-hour clock (AM/PM)
                    }),
                  });
                }}
                className="text-white tracking-wide font-semibold text-sm self-center md:self-stretch md:text-lg px-5 py-3 bg-[#3876ef] rounded-lg mt-5 text-center"
              >
                Pay and Subscribe
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
