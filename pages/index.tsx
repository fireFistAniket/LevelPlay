import HomeCarousel from "@/components/homeComponent/Carousel";
import FeatureLeague from "@/components/homeComponent/FeatureLeague";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import TopDropDownAccordian from "@/components/homeComponent/TopDropdownAccordian";
import CardsBox from "@/components/homeComponent/CardsBox";
import TrendingCards from "@/components/homeComponent/TrendingCards";
import MainArticleCards from "@/components/homeComponent/MainArticleCards";

export default function Home() {
  return (
    <WebsiteTemplate>
      <div>
        <HomeCarousel />
        <div className="mx-4 2xl:mx-36">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 my-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="21"
                  fill="none"
                >
                  <path
                    fill="#1E1E1E"
                    d="M17.027 9.966c0 5.029-3.48 9.73-8.154 10.872C4.198 19.697.719 14.995.719 9.966V4.53L8.873.906l8.154 3.624v5.436Zm-8.154 9.06c3.397-.906 6.342-4.946 6.342-8.86V5.708L8.873 2.881 2.53 5.708v4.458c0 3.914 2.944 7.954 6.342 8.86Zm2.763-4.53-2.79-1.676-2.782 1.676.734-3.17-2.455-2.12 3.243-.282 1.26-2.99 1.268 2.981 3.244.281-2.465 2.13.743 3.17Z"
                  />
                </svg>
                <h2 className="text-primary font-bebas-neue text-2xl">
                  Featured Leagues
                </h2>
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm underline text-primary/60 font-bebas-neue uppercase"
                >
                  View All
                </button>
              </div>
            </div>
            <FeatureLeague />
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-9">
            <div className="flex-1">
              <div>
                <MainArticleCards />
              </div>
              <div className="flex flex-col gap-6 mt-12">
                <h2 className="flex items-center gap-2 text-2xl tracking-wider font-bebas-neue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                  >
                    <path
                      stroke="#1E1E1E"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M17.5 1h-15A1.5 1.5 0 0 0 1 2.5v15A1.5 1.5 0 0 0 2.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 17.5 1Z"
                    />
                    <path
                      stroke="#1E1E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="m4.719 12.918 2.828-2.829 2.194 2.188L15 7"
                    />
                    <path
                      stroke="#1E1E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M11 7h4v4"
                    />
                  </svg>
                  <span>Trending articles</span>
                </h2>
                <TrendingCards />
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:w-[20%]">
              <div className="flex flex-col gap-2">
                <TopDropDownAccordian />
              </div>
              <div className="my-5 bg-primary/25 h-0.5 w-full"></div>
              <div className="">
                <CardsBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteTemplate>
  );
}
