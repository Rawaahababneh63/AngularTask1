using Day2.Server.DTO;
using Day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UsersController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult addUser([FromForm] AddUserDTO addUser)
        {

            var checkuser = _db.Users.Where(x => x.Email == addUser.Email).FirstOrDefault();
            if (checkuser != null)
            {
                return BadRequest("user already exist");
            }
            var user = new User
            {
                Username = addUser.Username,
                Email = addUser.Email,
                Password = addUser.Password,


            };
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok(user);
        }

        [HttpPost("Login")]
        public IActionResult LoginUser([FromForm] UserLogin1DTO userdto)
        {
            var user = _db.Users.FirstOrDefault(x => x.Email == userdto.Email);


            if (user == null)
            {
                return BadRequest("الرجاء تسجيل الدخول ");
            }
            if (userdto.Email != user.Email || userdto.Password != user.Password)
            {
                return NotFound("الرجاء ادخال كلمة المرور والبريد الإلكتروني الخاص  بشكل صحيح ");

            }

            else
            {

                return Ok(user);

            }
        }




    }
}