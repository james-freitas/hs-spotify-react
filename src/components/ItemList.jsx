import SingleItem from "./SingleItem";
import PropTypes from "prop-types";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Popular {title}</h2>
        <a href={path} className="item-list__link">
          Show all
        </a>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((_currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};
ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemsArray: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  idPath: PropTypes.string.isRequired,
};

export default ItemList;
