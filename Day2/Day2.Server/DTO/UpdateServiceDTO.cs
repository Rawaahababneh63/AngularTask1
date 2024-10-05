namespace Day2.Server.DTO
{
    public class UpdateServiceDTO
    {
     
        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }


    }
}
