import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SongItem = ({ image, name, duration, artist, audio, id, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img src={image} alt={`Song ${name}`} className="song-item__image" />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};
SongItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string,
  audio: PropTypes.string,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SongItem;
