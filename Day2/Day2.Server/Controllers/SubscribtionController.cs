using Day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribtionController : ControllerBase
    {

        private readonly MyDbContext _db;

        public SubscribtionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public IActionResult getSubscriptions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            return Ok(subscriptions);
        }


    }
}
