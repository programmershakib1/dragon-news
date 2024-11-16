import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="flex gap-3 bg-gray-100 py-2">
      <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={50} className="space-x-10">
        <Link to="/news">
          Lorem iLink tosum dolor sit amet consectetur adipisicing elit.
          Voluptatem tenetur accusantium totam ipsa possimus magnam
        </Link>
        <Link to="/news">
          Lorem iLink tosum dolor sit amet consectetur adipisicing elit.
          Voluptatem tenetur accusantium totam ipsa possimus magnam
        </Link>
        <Link to="/news">
          Lorem iLink tosum dolor sit amet consectetur adipisicing elit.
          Voluptatem tenetur accusantium totam ipsa possimus magnam
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
