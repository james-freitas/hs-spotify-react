import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";
import PropTypes from "prop-types";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation(); // desestructuring
  //console.log(pathname);

  const isHome = pathname === "/";

  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Popular {title}</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Show all
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((_currentValue, index) => index < finalItems)
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
