import { motion } from "framer-motion";
import Link from "next/link";

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type LinkProps = {
  href: string;
  label: string;
};

export default function Links({
  links,
  isLoggedIn,
}: {
  links: LinkProps[];
  isLoggedIn: boolean;
}) {
  return (
    <motion.ul variants={ulVariants} className="px-6 py-16">
      {links.map((item, index) => (
        <motion.li
          variants={liVariants}
          whileTap={{ scale: 0.95 }}
          key={index}
          className="mb-5 first:text-white text-white/60"
        >
          <Link href={item.href} className="">
            {item.label}
          </Link>
        </motion.li>
      ))}
      {!isLoggedIn && (
        <motion.li
          variants={liVariants}
          whileTap={{ scale: 0.95 }}
          className="mb-5 first:text-white text-white/60"
        >
          <Link href="/auth/login" className="">
            Log In
          </Link>
        </motion.li>
      )}
    </motion.ul>
  );
}
