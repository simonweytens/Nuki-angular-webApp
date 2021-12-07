using EmailStoreApi.Models;
using EmailStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmailStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmailsController : ControllerBase
{
    private readonly EmailService _emailService;

    public EmailsController(EmailService emailService) =>
        _emailService = emailService;

    [HttpGet]
    public async Task<List<Adresses>> Get() =>
        await _emailService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Adresses>> Get(string id)
    {
        var email = await _emailService.GetAsync(id);

        if (email is null)
        {
            return NotFound();
        }

        return email;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Adresses newEmail)
    {
        await _emailService.CreateAsync(newEmail);

        return CreatedAtAction(nameof(Get), new { id = newEmail.Id }, newEmail);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Adresses updatedEmail)
    {
        var email = await _emailService.GetAsync(id);

        if (email is null)
        {
            return NotFound();
        }

        updatedEmail.Id = email.Id;

        await _emailService.UpdateAsync(id, updatedEmail);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var email = await _emailService.GetAsync(id);

        if (email is null)
        {
            return NotFound();
        }

        await _emailService.RemoveAsync(email.Id);

        return NoContent();
    }
}