import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import PropTypes from "prop-types";

function Main({ type }) {
  return (
    <div className="main">
      {/* ItemList of Artists */}

      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artists"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* ItemList of Songs */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Songs"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
}
Main.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Main;
