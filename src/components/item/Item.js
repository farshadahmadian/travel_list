import "./Item.css";

const Item = function ({ item, onDeleteItem, onToggleItem }) {
  const handleClick = function () {
    console.log(this);
    onDeleteItem(this.id);
  };

  return (
    <li className="item-container">
      <input
        type="checkbox"
        value={item.packed}
        onChange={onToggleItem.bind(item)}
      />
      <div className={`item ${item.packed ? "packed" : ""}`}>
        <span> {item.quantity}</span>
        <span> {item.description}</span>
      </div>
      <button onClick={handleClick.bind(item)} className="btn-item">
        <img className="icon cross" src="cross.png" alt="cross" />
      </button>
    </li>
  );
};

export default Item;
