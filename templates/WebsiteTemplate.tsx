import ExtraHeader from "@/components/global/ExtraHeader";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import { ReactElement } from "react";

export default function WebsiteTemplate({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  return (
    <main>
      <ExtraHeader />
      <NavBar />
      <div className="mt-16 lg:mt-24">
        <>{children}</>
      </div>
      <div className="my-5 bg-primary/25 h-0.5 w-full"></div>
      <Footer />
    </main>
  );
}
