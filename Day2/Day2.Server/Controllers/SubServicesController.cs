using Day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServicesController : ControllerBase
    {

        private readonly MyDbContext _db;

        public SubServicesController(MyDbContext db)
        {
            _db = db;
        }
        /////////////////////////////////////////////////////////////////////////////
        [HttpGet("GetSubServicesbyServiceID")]
        public IActionResult GetSubServicesbyServiceID(int id)
        {
            var SubService = _db.SubServices.Where(x => x.ServiceId == id).ToList();
            return Ok(SubService);
        }
        /////////////////////////////////////////////////////////////////////////////
        [HttpGet("GetSubServicesbyID")]
        public IActionResult GetSubServicesbyID(int id)
        {
            var SubService = _db.SubServices.Where(x => x.SubServiceId == id).ToList();
            return Ok(SubService);
        }
    }
}