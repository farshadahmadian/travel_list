import { useState } from "react";
import "./Form.css";

const Form = function ({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description.trim().length) return;
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNumChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="form-container">
      <h3 className="form-header">What do you need for your trip?</h3>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={handleNumChange}
          className="number-form"
          type="number"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          onChange={handleDescriptionChange}
          value={description}
          className="item-form"
          placeholder="item ..."
          type="text"
        />
        <button className="btn-form">add</button>
      </form>
    </div>
  );
};

export default Form;
