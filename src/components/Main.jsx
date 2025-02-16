import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

function Main() {
  return (
    <div className="main">
      {/* ItemList of Artists */}
      <ItemList title="Artists" items={5} itemsArray={artistArray}/>

      {/* ItemList of Songs */}
      <ItemList title="Songs" items={10} itemsArray={songsArray}/>
    </div>
  )
}

export default Main