module app.common.services {
    interface IPersonService {
        get(): ng.IPromise<app.domain.EntityBase[]>;
        getSingle(id: number): ng.IPromise<app.domain.EntityBase>;
        add(person: app.domain.IEntity): ng.IPromise<app.domain.EntityBase>;
        update(person: app.domain.IEntity): ng.IPromise<void>;
        remove(id: number): ng.IPromise<void>;
    }

    export class PersonService implements IPersonService {
        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private constantService: ConstantService;
        private telemetryService: TelemetryService;

        static $inject = ['$http', '$q', 'constantService', 'telemetryService'];
        constructor(
            $http: ng.IHttpService,
            $q: ng.IQService,
            constantService: ConstantService,
            telemetryService: TelemetryService
        ) {
            this.httpService = $http;
            this.qService = $q;
            this.constantService = constantService;
        }

        get(): ng.IPromise<app.domain.IPerson[]> {
            return this.httpService.get(this.constantService.uri.persons).then(
                (success: ng.IHttpPromiseCallbackArg<app.domain.IPerson[]>) => {
                    return success.data;
                },
                error => {
                    this.telemetryService.logError(error);
                    return error;
                });
        }

        getSingle(id: number): ng.IPromise<app.domain.IPerson> {
            return this.httpService.get(this.constantService.uri.persons + '/' + id).then(
                (success: ng.IHttpPromiseCallbackArg<app.domain.IPerson>) => {
                    return success.data;
                },
                error => {
                    this.telemetryService.logError(error);
                    return error;
                });
        }

        add(person: app.domain.IPerson): ng.IPromise<app.domain.IPerson> {
            return this.httpService.post(this.constantService.uri.persons, person).then(
                (success: ng.IHttpPromiseCallbackArg<app.domain.IPerson>) => {
                    return success.data;
                },
                error => {
                    this.telemetryService.logError(error);
                    return error;
                });
        }

        update(person: app.domain.IPerson): ng.IPromise<void> {
            return this.httpService.put(this.constantService.uri.persons + '/' + person.Id, person)
                .then(data => {
                },
                error => {
                    this.telemetryService.logError(error);
                });
        }

        remove(id: number): ng.IPromise<void> {
            return this.httpService.delete(this.constantService.uri.persons + '/' + id)
                .then(data => {
                },
                error => {
                    this.telemetryService.logError(error);
                });
        }
    }

    angular.module('chsakellBlogApp')
        .service('personService', PersonService);
} 