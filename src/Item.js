import * as React from "react";

const Item = ({item, onRemoveItem}) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    &nbsp;
    <span>{item.author}</span>
    &nbsp;
    <span>{item.num_comments}</span>
    &nbsp;
    <span>{item.points}</span>
    &nbsp;
    <span>
      <button type='button' onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

export default Item;
