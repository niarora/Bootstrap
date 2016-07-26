namespace TypescriptApp.Controllers
{
    using System.Linq;
    using System.Web.Http;
    using App_Start;
    using Models;

    public class PersonsController : ApiController
    { 
        // GET api/persons
        public IHttpActionResult Get()
        {
            var persons = DataRepository.Persons;
            return Ok(persons);
        }

        // GET api/persons/5
        public IHttpActionResult Get(int id)
        {
            var person = DataRepository.Persons.FirstOrDefault(p => p.Id == id);

            if (person != null)
            {
                return Ok(person);
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/persons
        public IHttpActionResult Post([FromBody]Person person)
        {
            var max = DataRepository.Persons.Max(p => p.Id);
            person.Id = max + 1;

            DataRepository.Persons.Add(person);
            return Ok(person);
        }

        // PUT api/persons/5
        public IHttpActionResult Put(int id, [FromBody]Person person)
        {
            var updatePerson = DataRepository.Persons.FirstOrDefault(p => p.Id == person.Id);

            if (updatePerson != null)
            {
                for (int index = 0; index < DataRepository.Persons.Count; index++)
                {
                    if (DataRepository.Persons[index].Id == id)
                    {
                        DataRepository.Persons[index] = person;
                        return Ok();
                    }
                }
            }

            return NotFound();
        }

        // DELETE api/persons/5
        public IHttpActionResult Delete(int id)
        {
            if(DataRepository.Persons.Any(p => p.Id == id))
            {
                var deletePerson = DataRepository.Persons.First(p => p.Id == id);
                DataRepository.Persons.Remove(deletePerson);

                return Ok();
            }

            return NotFound();
        }
    }
}
