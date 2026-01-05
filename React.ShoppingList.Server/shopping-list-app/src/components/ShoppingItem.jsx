export default function ShoppingItem({ item, togglePickedUp, deleteItem }) {
  return (
    <li style={{ ...styles.item, opacity: item.isPickedUp ? 0.6 : 1 }}>
      <input
        type="checkbox"
        checked={item.isPickedUp}
        onChange={() => togglePickedUp(item)}
        style={styles.checkbox}
      />
      <span
        style={{
          ...styles.name,
          textDecoration: item.isPickedUp ? "line-through" : "none",
          color: item.isPickedUp ? "#888" : "#333",
        }}
      >
        {item.name}
      </span>
      <button style={styles.button} onClick={() => deleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease",
  },
  checkbox: {
    width: "18px",
    height: "18px",
  },
  name: {
    flex: 1,
    marginLeft: "10px",
    fontSize: "16px",
  },
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#e74c3c",
  },
};
