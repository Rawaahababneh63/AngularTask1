﻿using Day2.Server.DTO;
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

        [HttpPost]
        public IActionResult AddServices([FromForm] AddServiceDTO addServiceDTO)
        {
            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadImages");
            if (Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            var ImageFile = Path.Combine(folder, addServiceDTO.ServiceImage.FileName);
            using (var stream = new FileStream(ImageFile, FileMode.Create))
            {
                addServiceDTO.ServiceImage.CopyTo(stream);
            }

            var newservice = new Service
            {
                ServiceName = addServiceDTO.ServiceName,
                ServiceDescription = addServiceDTO.ServiceDescription,
                ServiceImage = addServiceDTO.ServiceImage.FileName,
            };

            _db.Services.Add(newservice);
            _db.SaveChanges();

            return Ok(newservice);
        }
    }
}
