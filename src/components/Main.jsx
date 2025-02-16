import ItemList from './ItemList'

function Main() {
  return (
    <div className="main">
      {/* ItemList of Artists */}
      <ItemList title="Artists" items={5} />

      {/* ItemList of Songs */}
      <ItemList title="Songs" items={10} />
    </div>
  )
}

export default Main