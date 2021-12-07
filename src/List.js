import * as React from "react";
import {sortBy} from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortUp, faSortDown} from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENT: (list) => sortBy(list, "num_comments").reverse(),
  POINT: (list) => sortBy(list, "points").reverse(),
};

const List = ({list, onRemoveItem}) => {
  const [sort, setSort] = React.useState({
    sortKey: "NONE",
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;

    setSort({sortKey, isReverse});
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <ul>
      <li className='item'>
        <span style={{width: "40%"}}>
          <button
            type='button'
            className='button button_sort'
            onClick={() => handleSort("TITLE")}>
            Title&nbsp;
            {sort.isReverse ? (
              <FontAwesomeIcon icon={faSortUp} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} />
            )}
          </button>
        </span>
        <span style={{width: "30%"}}>
          <button
            type='button'
            className='button button_sort'
            onClick={() => handleSort("AUTHOR")}>
            Author&nbsp;
            {sort.isReverse ? (
              <FontAwesomeIcon icon={faSortUp} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} />
            )}
          </button>
        </span>
        <span style={{width: "10%"}}>
          <button
            type='button'
            className='button button_sort'
            onClick={() => handleSort("COMMENT")}>
            Comments&nbsp;
            {sort.isReverse ? (
              <FontAwesomeIcon icon={faSortUp} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} />
            )}
          </button>
        </span>
        <span style={{width: "10%"}}>
          <button
            type='button'
            className='button button_sort'
            onClick={() => handleSort("POINT")}>
            Points&nbsp;
            {sort.isReverse ? (
              <FontAwesomeIcon icon={faSortUp} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} />
            )}
          </button>
        </span>
        <span style={{width: "10%"}}>Actions</span>
      </li>
      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};

export default List;
