namespace TypescriptApp.App_Start
{
    using System.Collections.Generic;
    using Models;

    public class DataRepository
    {
        public static List<Person> Persons = new List<Person>()
        {
            new Person()
            {
                Id = 1,
                FirstName = "Nik",
                LastName = "Arora",
                Phone = "123-455-9878",
                City = "Seattle"
            },
            new Person()
            {
                Id = 2,
                FirstName = "Satya",
                LastName = "Nadella",
                Phone = "1-800-GR8-MSFT",
                City = "Redmond",
            },
            new Person()
            {
                Id = 3,
                FirstName = "Bill",
                LastName = "Murray",
                Phone = "XXX-XXX-XXXX",
                City = "Los Angeles"
            }
        };
    }
}