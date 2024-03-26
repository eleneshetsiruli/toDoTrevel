import { itemInter, FormProps } from "./interfaces/types";

export const PackingList: React.FC<FormProps> = ({ list, setList }) => {
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
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
