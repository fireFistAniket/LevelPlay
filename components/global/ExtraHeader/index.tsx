import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";

export default function ExtraHeader() {
  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 50], ["0", "100%"]);
  return (
    <motion.div
      style={{ translateY: yPosition }}
      className="flex mx-4 my-3 2xl:mx-36 xl:mx-28 lg:mx-20 relative gap-2 lg:gap-6 justify-between flex-1"
    >
      <div>
        <select
          name=""
          id=""
          className="py-2 px-3 text-primary text-xs outline-none bg-primary/10 rounded-md"
        >
          <option value="">Top Events</option>
        </select>
      </div>
      <div className="flex items-center bg-white px-3 gap-2 flex-1 rounded-md">
        <IoSearchSharp size={20} className="size-4 flex-shrink-0" />
        <input
          type="search"
          className="outline-none py-2 bg-transparent text-xs flex-grow"
          placeholder="Search upcoming matches etc.."
        />
      </div>
      <div className="hidden lg:flex items-center">
        <h3 className="text-primary text-sm font-semibold">Follow Us On :</h3>
        <div className="flex px-3 py-2 gap-3 items-center">
          <Link href="https://facebook.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="20"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                d="m9.898 11.011.547-3.476h-3.37v-2.26c0-.95.47-1.88 1.975-1.88h1.554V.436A18.834 18.834 0 0 0 7.868.203c-2.774 0-4.585 1.668-4.585 4.682v2.65H.208v3.477h3.075v8.408h3.792v-8.408h2.823Z"
              />
            </svg>
          </Link>
          <Link href="https://x.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                d="M15.04.102h2.75L11.781 7.32l7.07 9.823h-5.537L8.98 11.186l-4.96 5.958H1.267l6.427-7.721L.914.102h5.674l3.919 5.445L15.038.102h.002Zm-.966 15.312h1.524L5.761 1.74H4.125l9.95 13.673Z"
              />
            </svg>
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                d="M4.62 19.396V6.566H.36v12.83h4.26ZM2.49 4.815c1.486 0 2.41-.985 2.41-2.216C4.874 1.339 3.977.382 2.52.382 1.062.382.11 1.339.11 2.599c0 1.23.924 2.216 2.354 2.216h.027Zm4.488 14.58h4.26v-7.163c0-.383.028-.767.14-1.04.309-.767 1.01-1.56 2.187-1.56 1.541 0 2.158 1.176 2.158 2.901v6.863h4.26V12.04c0-3.94-2.101-5.774-4.904-5.774-2.298 0-3.308 1.285-3.869 2.16h.029v-1.86h-4.26c.055 1.204 0 12.83 0 12.83Z"
              />
            </svg>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                d="M6.604 9.615a3.202 3.202 0 1 1 3.201 3.203 3.202 3.202 0 0 1-3.201-3.203Zm-1.731 0a4.933 4.933 0 1 0 4.932-4.934 4.933 4.933 0 0 0-4.932 4.934Zm8.907-5.13a1.153 1.153 0 1 0 1.154-1.152 1.153 1.153 0 0 0-1.154 1.153ZM5.925 17.437c-.937-.042-1.446-.198-1.784-.33a2.986 2.986 0 0 1-1.105-.719 2.964 2.964 0 0 1-.719-1.104c-.131-.338-.287-.848-.33-1.785-.047-1.012-.056-1.317-.056-3.883s.01-2.869.056-3.883c.043-.936.2-1.445.33-1.784.175-.449.383-.769.719-1.105a2.96 2.96 0 0 1 1.105-.719c.338-.132.847-.288 1.784-.33 1.012-.047 1.316-.056 3.88-.056s2.869.01 3.882.056c.937.042 1.445.2 1.784.33a2.98 2.98 0 0 1 1.105.719c.336.336.544.656.718 1.105.132.338.288.848.33 1.784.048 1.014.057 1.317.057 3.883s-.01 2.87-.056 3.883c-.043.937-.2 1.446-.33 1.785a2.978 2.978 0 0 1-.719 1.104 2.986 2.986 0 0 1-1.105.719c-.338.132-.847.288-1.784.33-1.012.047-1.316.056-3.882.056-2.565 0-2.868-.009-3.88-.056ZM5.845.065C4.823.112 4.124.274 3.514.511A4.711 4.711 0 0 0 1.812 1.62 4.695 4.695 0 0 0 .704 3.322c-.237.61-.4 1.309-.446 2.332C.21 6.678.2 7.006.2 9.615c0 2.61.01 2.937.058 3.962.046 1.023.209 1.721.446 2.332a4.697 4.697 0 0 0 1.108 1.702c.535.534 1.07.862 1.702 1.108.611.238 1.309.4 2.331.447 1.025.046 1.352.058 3.96.058 2.609 0 2.937-.011 3.96-.058 1.023-.047 1.722-.21 2.332-.447a4.723 4.723 0 0 0 1.702-1.108 4.707 4.707 0 0 0 1.108-1.702c.237-.61.4-1.31.446-2.332.046-1.026.057-1.352.057-3.962 0-2.609-.01-2.937-.057-3.961-.047-1.023-.209-1.722-.446-2.332a4.725 4.725 0 0 0-1.108-1.702A4.7 4.7 0 0 0 16.098.51c-.611-.237-1.31-.4-2.332-.446-1.024-.047-1.351-.058-3.96-.058-2.608 0-2.936.01-3.96.058Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
