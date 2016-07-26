module app.domain {
    export interface IPerson {
        Id?: number;
        FirstName: string;
        LastName: string;
        Phone: string;
        City: string;
    }

    export class Person extends app.domain.EntityBase implements IPerson {
        constructor(
            public FirstName: string,
            public LastName: string,
            public Phone: string,
            public City: string,
            public Id?: number) {
            super();

            this.Id = Id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.City = City;
            this.Phone = Phone;
        }
    }
}