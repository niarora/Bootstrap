module app.common.services {
    export class ConstantService {
        private static baseUri = '/api';

        apiPostURI: string;
        uri: {
            persons: string;
        }

        constructor() {
            this.uri = {
                persons: ConstantService.baseUri + '/persons'
            };
        }
    }

    angular.module('chsakellBlogApp')
        .service('constantService', ConstantService);
}