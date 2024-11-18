import { Toaster } from "@/components/ui/toaster";
import AuthContextProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bebas_Neue, Poppins } from "next/font/google";
import Head from "next/head";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LevelPlay</title>
        <meta
          name="description"
          content="A platform for learning and playing level-based games"
        />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <AuthContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </AuthContextProvider>
    </>
  );
}
