using Day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubscriptionController : ControllerBase
    { private readonly MyDbContext _db;
        public UserSubscriptionController(MyDbContext db)
        {
            _db = db;
        }


        [HttpPost]
        public IActionResult AdduserSubcription([FromBody] UserSubscriptionDTO userSubscription)
        {

            var subsription = _db.Subscriptions.Where(x => x.SubscriptionId == userSubscription.SubscriptionId).FirstOrDefault();
            var amount = subsription.SubscriptionAmount;
             var startDate=  DateOnly.FromDateTime(DateTime.Now);

            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);
            switch (amount)
            {
                case "7":
               endDate=startDate.AddDays(7);
                    break;
                case "90":
                    endDate = startDate.AddMonths(3);
                    break;
                case "365":
                    endDate = startDate.AddYears(1);

                    break;


            }

            var subsrciptionUser = new UserSubscription
            {
                UserId = userSubscription.UserId,
                SubscriptionId = userSubscription.SubscriptionId,
                SubServiceId = userSubscription.SubServiceId,
                StartDate = startDate,
                EndDate = endDate,

            };
            _db.UserSubscriptions.Add(subsrciptionUser);
            _db.SaveChanges();

            return Ok();




        }
    }
}
