import Action from "../action/Action";
import "./PackingList.css";
import Item from "../item/Item";
import "../form/Form.css";
import { useState } from "react";

const sortByInput = function (items) {
  const sortedItems = items;
  return sortedItems;
};

const sortByDescription = function (items) {
  const sortedItems = items.slice().sort((a, b) => {
    return a.description.localeCompare(b.description);
  });
  return sortedItems;
};

const sortByPacked = function (items) {
  const sortedItems = items.slice().sort((a, b) => {
    return Number(a.packed) - Number(b.packed);
  });
  return sortedItems;
};

const sortOptions = ["input", "description", "packed"];

const sortFunctions = [sortByInput, sortByDescription, sortByPacked];

const PackingList = function ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [];

  const changeHandler = (event) => {
    setSortBy(event.target.value);
  };

  sortOptions.forEach((option, i) => {
    if (option === sortBy) sortedItems = sortFunctions[i](items);
  });

  return (
    <div className="packing-list-container">
      <ul className="packing-list">
        {sortedItems.length > 0 &&
          sortedItems.map((item) => (
            <Item
              onDeleteItem={onDeleteItem}
              key={item.id}
              item={item}
              onToggleItem={onToggleItem}
            />
          ))}
      </ul>
      <div className="action-container">
        <Action sortHandler={changeHandler} />
        <button className="clear" onClick={onClearList}>
          clear list
        </button>
      </div>
    </div>
  );
};

export default PackingList;
