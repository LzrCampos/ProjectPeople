using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Peoples.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonsController : ControllerBase
    {

        private readonly ILogger<PersonsController> _logger;

        private readonly string _filePath = @"./Persons.js";

        public PersonsController(ILogger<PersonsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetPersons")]
        public IEnumerable<Person> Get()
        {
            List<Person> source = new List<Person>();

            using (StreamReader r = new StreamReader(_filePath))
            {
                string json = r.ReadToEnd();
                source = JsonConvert.DeserializeObject<List<Person>>(json);
            }
            return source;
        }
    }
}
