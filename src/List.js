import * as React from "react";
import Item from "./Item";

const List = ({list, onRemoveItem}) => (
  <ul>
    {/* Make list items */}
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

export default List;
