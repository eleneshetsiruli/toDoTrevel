import { useState } from "react";
import { itemInter, FormProps } from "./interfaces/types";

export const PackingList: React.FC<FormProps> = ({ list, setList }) => {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = list;
      break;
    case "description":
      sortedItems = list
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = list
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
  }

  function handleDelete(id: number) {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
  }

  function handleChecked(id: number) {
    const updateList = list.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );

    setList(updateList);
  }

  function handleClearList() {
    setList([]);
  }

  function Item({ item }: { item: itemInter }) {
    return (
      <li>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => handleChecked(item.id)}
        />
        <span
          style={{ textDecoration: `${item.packed ? "line-through" : ""}` }}
        >
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </li>
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(ev) => setSortBy(ev.target.value)} value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status </option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
};
