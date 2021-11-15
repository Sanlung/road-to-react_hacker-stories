import React from "react";
import Item, {Story} from "./Item";

type Stories = Array<Story>;

type ListProps = {
  list: Stories;
  onRemoveItem: (item: Story) => void;
};

const List = ({list, onRemoveItem}: ListProps) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

export default List;
export type {Stories};
