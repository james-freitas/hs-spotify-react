import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const SingleItem = () => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img 
            className="single-item__image" 
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" 
            alt="Artist X" 
          />
        
          <FontAwesomeIcon 
            className='single-item__icon' 
            icon={faCirclePlay} 
          />
        </div>
      </div>
      
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className='single-item__title'>Amo Noite E Dia - Live In Sao Paulo / 2010</p>
          <p className='single-item__type'>Artist</p>
        </div>
      </div>
    </div>
  )
}

export default SingleItem