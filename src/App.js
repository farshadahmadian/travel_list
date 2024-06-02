import { useState } from "react";
import Form from "./components/form/Form";
import Logo from "./components/logo/Logo";
import PackingList from "./components/packingList/PackingList";
import Stats from "./components/stats/Stats";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };

  const handleDeleteItem = (idToBeDeleted) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => {
        return item.id !== idToBeDeleted;
      });
    });
  };

  const handleToggleItem = function () {
    setItems((previousItems) =>
      previousItems.map((item) => {
        return item.id === this.id ? { ...item, packed: !item.packed } : item;
      })
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the list?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />

      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        setItems={setItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
