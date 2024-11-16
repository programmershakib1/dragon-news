import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightSide from "../components/layout-component/RightSide";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-9">
                    <h2 className="font-semibold mb-5">Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </div>
                <div className="col-span-3"><RightSide></RightSide></div>
            </div>
        </div>
    );
};

export default NewsDetails;