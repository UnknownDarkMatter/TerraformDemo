using Microsoft.AspNetCore.Mvc;

namespace FileExchange.MVC.Controllers;

[ApiController]
[Route("[controller]")]
public class FileController : ControllerBase
{
    [HttpGet]
    [Route("HelloWorld")]
    public IActionResult HelloWorld()
    {
        return Ok(new {message = "Hello World !"});
    }
}
