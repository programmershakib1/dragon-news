import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSide from "../components/layout-component/LeftSide";
import RightSide from "../components/layout-component/RightSide";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <LatestNews></LatestNews>
            <div className="py-10">
                <Navbar></Navbar>
            </div>
            <div className="grid md:grid-cols-12 gap-5">
                <div className="col-span-3"><LeftSide></LeftSide></div>
                <div className="col-span-6"><Outlet></Outlet></div>
                <div className="col-span-3"><RightSide></RightSide></div>
            </div>
        </div>
    );
};

export default Home;