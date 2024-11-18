import TrendingCard from "./TrendingCard";

export default function TrendingCards() {
  const trendingCards = [
    {
      img: "/trendingcards/trending-card-cover-1.png",
    },
    {
      img: "/trendingcards/trending-card-cover-2.png",
    },
    {
      img: "/trendingcards/trending-card-cover-3.png",
    },
    {
      img: "/trendingcards/trending-card-cover-4.png",
    },
    {
      img: "/trendingcards/trending-card-cover-5.png",
    },
    {
      img: "/trendingcards/trending-card-cover-6.png",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {trendingCards.map((img, index) => (
        <TrendingCard key={index} img={img.img} />
      ))}
    </div>
  );
}
