using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React.ShoppingList.Server.Data;
using React.ShoppingList.Server.Models;

namespace React.ShoppingList.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ShoppingListItemsController : ControllerBase
{
    private readonly ShoppingListDbContext _context;

    public ShoppingListItemsController(ShoppingListDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ShoppingItems>>> GetItems()
    {
        return await _context.ShoppingItems.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<ShoppingItems>> CreateItem(ShoppingItems item)
    {
        _context.ShoppingItems.Add(item);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetItems), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateItem(int id, ShoppingItems item)
    {
        if (id != item.Id)
            return BadRequest();

        _context.Entry(item).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItem(int id)
    {
        var item = await _context.ShoppingItems.FindAsync(id);

        if (item == null)
            return NotFound();

        _context.ShoppingItems.Remove(item);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
