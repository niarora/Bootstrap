module app.personAdd {

    interface IAddPersonViewModel {
        person: app.domain.IPerson;
        add(): void;
    }

    class PersonAddCtrl implements IAddPersonViewModel {

        person: app.domain.IPerson;

        static $inject = ['$location', 'constantService', 'personService'];
        constructor(private $location: ng.ILocationService,
            private constantService: app.common.services.ConstantService,
            private personService: app.common.services.PersonService) {
        }


        add(): void {
            this.personService.add(this.person)
                .then((result: app.domain.IPerson) => {
                    alert(result.FirstName + ' added successfully');
                    this.$location.path('/');
                });
        }
    }
    angular.module('chsakellBlogApp')
        .controller('PersonAddCtrl', PersonAddCtrl);
}