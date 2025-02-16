import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const SingleItem = ({ id, name, image, banner, artist }) => {
  console.log(name);
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img 
            className="single-item__image" 
            src={image} 
            alt={`Artist ${name}`}
          />
        
          <FontAwesomeIcon 
            className='single-item__icon' 
            icon={faCirclePlay} 
          />
        </div>
      </div>
      
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className='single-item__title'>{name}</p>
          <p className='single-item__type'>{artist ?? 'Artist'}</p>
        </div>
      </div>
    </div>
  )
}
SingleItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  banner: PropTypes.string
}

export default SingleItem
