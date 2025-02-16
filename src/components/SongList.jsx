import SongItem from "./SongItem";

const SongList = () => {
  return (
    <>
      <div className="song-list">
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
      </div>
      <p className="song-list__see-more">See more</p>
    </>
  );
};

export default SongList;
