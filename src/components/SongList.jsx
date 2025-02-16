import SongItem from "./SongItem";
import PropTypes from "prop-types";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <>
      <div className="song-list">
        {songsArray
          .filter((currentValue, index) => index < items)
          .map((currentSongObj, index) => (
            <SongItem {...currentSongObj} index={index} key={index} />
          ))}
      </div>
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        See more
      </p>
    </>
  );
};
SongList.propTypes = {
  songsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SongList;
