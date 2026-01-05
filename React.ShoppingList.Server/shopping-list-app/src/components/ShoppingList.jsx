import { useState, useEffect } from "react";
import { getItems, updateItem, deleteItem } from "../services/shoppingApi";
import ShoppingItem from "./ShoppingItem";
import AddItemForm from "./AddItemForm";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const togglePickedUp = async (item) => {
    const updated = { ...item, isPickedUp: !item.isPickedUp };
    await updateItem(updated);
    fetchItems();
  };

  const removeItem = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛒 My Shopping List</h1>
      <AddItemForm refresh={fetchItems} />
      <ul style={styles.list}>
        {items
          .sort((a, b) => a.isPickedUp - b.isPickedUp) // picked items go to bottom
          .map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              togglePickedUp={togglePickedUp}
              deleteItem={removeItem}
            />
          ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fdfdfd",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};
