using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
  // 🧠 Fake database (in-memory)
  private static List<LoginDto> users = new List<LoginDto>();

  [HttpPost("login")]
  public IActionResult Login([FromBody] LoginDto login)
  {
    var user = users.FirstOrDefault(u => u.Username == login.Username && u.Password == login.Password);
    if (user != null)
    {
      return Ok(new { token = "fake-jwt-token" });
    }
    return Unauthorized();
  }

  [HttpPost("register")]
  public IActionResult Register([FromBody] RegisterDto register)
  {
    if (users.Any(u => u.Username == register.Username))
    {
      return BadRequest(new { message = "Username already exists" });
    }

    // ✅ Spara användaren
    users.Add(new LoginDto { Username = register.Username, Password = register.Password });

    return Ok(new { message = "User registered successfully" });
  }
}

public class LoginDto
{
  public string? Username { get; set; }
  public string? Password { get; set; }
}

public class RegisterDto
{
  public string? Username { get; set; }
  public string? Password { get; set; }
}
