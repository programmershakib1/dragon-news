import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className="font-semibold">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2 mt-5 text-center">
                {
                    categories.map((category, idx) => <NavLink to={`/category/${category.category_id}`} className="border py-2 px-6" key={idx}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSide;