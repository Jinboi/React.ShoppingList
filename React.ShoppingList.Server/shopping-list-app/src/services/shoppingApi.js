const API_URL = "https://localhost:7105/api/ShoppingListItems";

export const getItems = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const createItem = async (item) => {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
};

export const updateItem = async (item) => {
    await fetch(`${API_URL}/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
};

export const deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
};
