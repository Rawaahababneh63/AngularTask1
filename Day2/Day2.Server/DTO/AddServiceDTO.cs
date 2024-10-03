using Day2.Server.Models;

namespace Day2.Server.DTO
{
    public class AddServiceDTO
    {


        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

     
    }
}
