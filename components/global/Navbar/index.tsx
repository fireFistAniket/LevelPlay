import { useDimensions } from "@/hooks/use-dimensions";
import { motion, useCycle, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import Links from "./Links";
import Image from "next/image";
import Link from "next/link";
import { useClickOutside } from "@/hooks/use-click-outside";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { AuthContext } from "@/context/AuthContext";
import { IoIosLogOut, IoMdLogIn } from "react-icons/io";
import { useRouter } from "next/navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    width: "20rem",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    width: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const toggleDrawerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useClickOutside(toggleDrawerRef, () => (isOpen ? false : null));

  const { scrollY } = useScroll();

  const router = useRouter();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext) ?? {
    isLoggedIn: false,
  };

  // Use `useTransform` to map `scrollY` values to the `top` position
  const topPosition = useTransform(scrollY, [0, 50], ["68px", "0px"]);

  const links = [
    {
      label: "Football",
      href: "#",
    },
    {
      label: "Cricket",
      href: "#",
    },
    {
      label: "Rugby",
      href: "#",
    },
    {
      label: "NBA",
      href: "#",
    },
    {
      label: "Badminton",
      href: "#",
    },
    {
      label: "More Sports",
      href: "#",
    },
  ];

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      style={{ top: topPosition }}
      ref={containerRef}
      className="fixed left-0 bottom-0 w-full flex justify-between items-center h-12 lg:h-20 bg-primary px-4 py-4 2xl:px-36 xl:px-28 lg:px-20 z-[1100]"
    >
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
      <motion.div
        className="bg-primary absolute top-0 right-0 h-screen block lg:hidden"
        variants={sidebar}
        ref={toggleDrawerRef}
      >
        <Links links={links} isLoggedIn={isLoggedIn}  />
      </motion.div>
      <div className="flex lg:hidden items-center">
        <button
          onClick={() => toggleOpen()}
          className="rounded-full size-12 relative inline-flex items-center justify-center"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 100%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 100%)"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 100%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="/pro-pic.png"
                alt="Profile Picture"
                width={30}
                height={30}
                className="rounded-full size-8"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-md mr-1 px-3 py-4">
              <DropdownMenuItem className="inline-flex w-full gap-3 text-base text-primary my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  fill="none"
                >
                  <path
                    stroke="#1E1E1E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 14.25c0-1.047 0-1.57-.13-1.996a3 3 0 0 0-2-2c-.425-.129-.948-.129-1.995-.129h-3.75c-1.047 0-1.57 0-1.996.13a3 3 0 0 0-2 2C1 12.68 1 13.202 1 14.25m9.375-10.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z"
                  />
                </svg>
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="inline-flex w-full gap-3 text-base text-primary/50 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  fill="none"
                >
                  <g
                    stroke="#1E1E1E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    opacity=".5"
                  >
                    <path d="M9 10.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
                    <path d="M14.046 10.546a1.125 1.125 0 0 0 .225 1.24l.04.041a1.364 1.364 0 1 1-1.93 1.93l-.04-.041a1.125 1.125 0 0 0-1.241-.225 1.125 1.125 0 0 0-.682 1.03v.115a1.364 1.364 0 0 1-2.727 0v-.061a1.125 1.125 0 0 0-.736-1.03 1.125 1.125 0 0 0-1.241.226l-.041.04a1.365 1.365 0 1 1-1.93-1.93l.041-.04A1.125 1.125 0 0 0 4.01 10.6a1.125 1.125 0 0 0-1.03-.682h-.115a1.364 1.364 0 0 1 0-2.727h.061a1.125 1.125 0 0 0 1.03-.736 1.125 1.125 0 0 0-.225-1.241l-.041-.041a1.364 1.364 0 1 1 1.93-1.93l.04.041a1.125 1.125 0 0 0 1.24.226h.055a1.125 1.125 0 0 0 .681-1.03v-.115a1.364 1.364 0 0 1 2.728 0v.061a1.125 1.125 0 0 0 .681 1.03 1.125 1.125 0 0 0 1.241-.225l.041-.041a1.363 1.363 0 0 1 2.226.442 1.364 1.364 0 0 1-.296 1.487l-.041.041a1.125 1.125 0 0 0-.226 1.24v.055a1.124 1.124 0 0 0 1.03.681h.115a1.364 1.364 0 0 1 0 2.728h-.061a1.125 1.125 0 0 0-1.03.681Z" />
                  </g>
                </svg>
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="my-2">
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    setIsLoggedIn(false);
                    router.push("/auth/login");
                  }}
                  className="inline-flex items-center w-full gap-3 text-base text-primary/50"
                >
                  <IoIosLogOut />
                  <span>Log Out</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white font-semibold text-xs bg-[#3876ef] py-2 px-6 text-center my-2 hover:bg-[#3876ef]">
                <Link href="/subscription" className="text-center w-full">
                  Subscribe
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href="/auth/signup"
            className="rounded-full text-white relative inline-flex items-center justify-center"
          >
            <IoMdLogIn className="size-8" />
          </Link>
        )}
      </div>
      <div className="hidden lg:flex gap-6 xl:gap-8 2xl:gap-12 items-center">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-white/60 hover:text-white first:text-white text-sm xl:text-base font-medium"
          >
            {link.label}
          </Link>
        ))}
        <div className="flex gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src="/pro-pic.png"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full size-10"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-md mr-1 px-3 py-4">
                <DropdownMenuItem className="inline-flex w-full gap-3 text-base text-primary my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    fill="none"
                  >
                    <path
                      stroke="#1E1E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 14.25c0-1.047 0-1.57-.13-1.996a3 3 0 0 0-2-2c-.425-.129-.948-.129-1.995-.129h-3.75c-1.047 0-1.57 0-1.996.13a3 3 0 0 0-2 2C1 12.68 1 13.202 1 14.25m9.375-10.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z"
                    />
                  </svg>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="inline-flex w-full gap-3 text-base text-primary/50 my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    fill="none"
                  >
                    <g
                      stroke="#1E1E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      opacity=".5"
                    >
                      <path d="M9 10.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
                      <path d="M14.046 10.546a1.125 1.125 0 0 0 .225 1.24l.04.041a1.364 1.364 0 1 1-1.93 1.93l-.04-.041a1.125 1.125 0 0 0-1.241-.225 1.125 1.125 0 0 0-.682 1.03v.115a1.364 1.364 0 0 1-2.727 0v-.061a1.125 1.125 0 0 0-.736-1.03 1.125 1.125 0 0 0-1.241.226l-.041.04a1.365 1.365 0 1 1-1.93-1.93l.041-.04A1.125 1.125 0 0 0 4.01 10.6a1.125 1.125 0 0 0-1.03-.682h-.115a1.364 1.364 0 0 1 0-2.727h.061a1.125 1.125 0 0 0 1.03-.736 1.125 1.125 0 0 0-.225-1.241l-.041-.041a1.364 1.364 0 1 1 1.93-1.93l.04.041a1.125 1.125 0 0 0 1.24.226h.055a1.125 1.125 0 0 0 .681-1.03v-.115a1.364 1.364 0 0 1 2.728 0v.061a1.125 1.125 0 0 0 .681 1.03 1.125 1.125 0 0 0 1.241-.225l.041-.041a1.363 1.363 0 0 1 2.226.442 1.364 1.364 0 0 1-.296 1.487l-.041.041a1.125 1.125 0 0 0-.226 1.24v.055a1.124 1.124 0 0 0 1.03.681h.115a1.364 1.364 0 0 1 0 2.728h-.061a1.125 1.125 0 0 0-1.03.681Z" />
                    </g>
                  </svg>
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="my-2">
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn");
                      setIsLoggedIn(false);
                      router.push("/auth/login");
                    }}
                    className="inline-flex items-center w-full gap-3 text-base text-primary/50"
                  >
                    <IoIosLogOut />
                    <span>Log Out</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white font-semibold text-xs bg-[#3876ef] py-2 px-6 text-center my-2 hover:bg-[#3876ef]">
                  <Link href="/subscription" className="text-center w-full">
                    Subscribe
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm xl:text-base font-semibold text-white py-3 lg:px-4 xl:px-5 2xl:px-7 bg-[#ff991a] rounded-lg"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="text-sm xl:text-base font-semibold text-white py-3 lg:px-4 xl:px-5 2xl:px-7 bg-[#3876ef] rounded-lg"
              >
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
