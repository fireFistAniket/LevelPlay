import BlogCard from "./BlogCard";

export default function CardsBox() {
  const cards = [
    {
      img: "/blogcardcovers/card-cover-1.jpg",
    },
    {
      img: "/blogcardcovers/card-cover-2.png",
    },
    {
      img: "/blogcardcovers/card-cover-3.png",
    },
    {
      img: "/blogcardcovers/card-cover-4.png",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <BlogCard img={card.img} key={index} />
      ))}
    </div>
  );
}
