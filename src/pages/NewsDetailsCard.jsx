import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsDetailsCard = ({news}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={news?.image_url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news?.details}</p>
          <div className="card-actions">
            <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To Category</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsDetailsCard.propTypes = {
    news: PropTypes.object
}

export default NewsDetailsCard;
