import { useState } from "react";
import { createItem } from "../services/shoppingApi";

export default function AddItemForm({ refresh }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    await createItem({ name, isPickedUp: false });
    setName("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new item..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        ➕ Add
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px 0 0 8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "0 8px 8px 0",
    border: "none",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
  },
};
