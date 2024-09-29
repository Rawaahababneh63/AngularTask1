using Day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {


        private readonly MyDbContext _db;

        public ServicesController(MyDbContext db)
        {
            _db = db;
        }
        ////////////////////////////////////////////////////////////////////////////////////////
        [HttpGet("GetAllServices")]
        public IActionResult GetAllServices()
        {
            var services = _db.Services.ToList();
            if (!services.Any()) { return BadRequest(); }
            return Ok(services);

        }
    }
}
