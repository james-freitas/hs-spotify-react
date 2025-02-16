
import SingleItem from './SingleItem'
import PropTypes from 'prop-types'

const ItemList = ({ title, items }) => {
  console.log(items);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Popular {title}</h2>
        <a className="item-list__link" href="/">Show all</a>
      </div>
      <div className="item-list__container">
      {
        Array(items).fill().map((currentValue, index) => (
          <SingleItem key={`${title}-${index}`} />
        ))
        
      }
      
      
      </div>
  </div>
  )
}
ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default ItemList