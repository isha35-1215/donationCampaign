import { useEffect, useState } from "react";

const Card = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div onClick={}>
            <div className="mt-20 mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                {cards.map((card) => (
                    <div className="rounded-xl" key={card.id} style={{ backgroundColor: card.Card_bg }}>
                        <img className="w-full" src={card.img} alt={card.title} />
                        <div className="px-6 py-2 w-fit">
                            <p className="px-4 rounded btn normal-case text-sm font-medium border-gray" style={{ backgroundColor: card.btn_bg, color: card.Category_bg }}>{card.Category}</p>
                        </div>
                        <h3 className="px-6 pb-4 text-xl font-semibold font-['Inter']" style={{ color: card.Category_bg }}>{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
