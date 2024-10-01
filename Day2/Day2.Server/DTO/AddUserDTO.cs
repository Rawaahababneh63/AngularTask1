using Day2.Server.Models;

namespace Day2.Server.DTO
{
    public class AddUserDTO
    {


        public string Username { get; set; } = null!;

        public string Password { get; set; } = null!;

        public string Email { get; set; } = null!;


    }
}
