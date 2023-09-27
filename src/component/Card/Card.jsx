import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="mt-20 mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {cards.map((card) => (
        <Link to={`/donation/${card.id}`} key={card.id}>
          {/* Wrap each card with Link */}
          <div className="rounded-xl" style={{ backgroundColor: card.Card_bg }}>
            <img className="w-full" src={card.img} alt={card.title} />
            <div className="px-6 py-2 w-fit">
              <p className="px-4 rounded btn normal-case text-base font-medium border-gray" style={{ backgroundColor: card.Category_bg, color: card.btn_bg }}>{card.Category}</p>
            </div>
            <h3 className="px-6 pb-4 text-xl font-semibold font-['Inter']" style={{ color: card.Category_bg }}>{card.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
