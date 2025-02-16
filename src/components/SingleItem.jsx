import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Artist ${name}`}
          />

          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
          <p className="single-item__type">{artist ?? "Artist"}</p>
        </div>
      </div>
    </Link>
  );
};
SingleItem.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  banner: PropTypes.string,
  artist: PropTypes.string,
  idPath: PropTypes.string,
};

export default SingleItem;
