namespace React.ShoppingList.Server.Models;
public class ShoppingItems
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public bool IsPickedUp { get; set; }
}
