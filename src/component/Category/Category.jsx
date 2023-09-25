import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Category = ({categories}) => {


    // const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     fetch('/public/data.json')
    //         .then(res => res.json())
    //         .then(data => setCards(data));
    // }, [])

    return (
        <div>
            {
                categories?.map(category => <Card key={category.id} category={category}></Card>)
            }
        </div>
    );
};

export default Category;