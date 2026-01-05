using Microsoft.EntityFrameworkCore;
using React.ShoppingList.Server.Models;

namespace React.ShoppingList.Server.Data;
public class ShoppingListDbContext : DbContext
{
    public ShoppingListDbContext(DbContextOptions<ShoppingListDbContext> options)
        : base(options)
    {
    }

    public DbSet<Models.ShoppingItems> ShoppingItems => Set<ShoppingItems>();
}
