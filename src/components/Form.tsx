import { useState } from "react";
import { Event, FormProps } from "./interfaces/types";

export const Form: React.FC<FormProps> = ({ list, setList }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(ev: Event) {
    ev.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setList([...list, newItem]);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What you need for your ♥️ trip?</h3>
      <select onChange={(ev) => setQuantity(+ev.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
