import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();

    return (
        <div>
            <h2 className="font-semibold pb-5">Dragon News Home</h2>
            <div>
                {
                    news.map((singleNews, idx) => <NewsCard key={idx} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;