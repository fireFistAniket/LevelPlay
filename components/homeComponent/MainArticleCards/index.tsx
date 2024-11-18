import MainArticleCard from "./MainArticleCard";

export default function MainArticleCards() {
  const mainArticleCards = [
    {
      img: "/mainarticle/main-article-cover-1.png",
    },
    {
      img: "/mainarticle/main-article-cover-2.png",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {mainArticleCards.map((article, index) => (
        <MainArticleCard img={article.img} key={index} />
      ))}
    </div>
  );
}
