module app.common.services {
    interface ITelemetryService {
        logError(obj: any): void;
        logInfo(obj: any): void;
        logWarning(obj: any): void;
    }

    export class TelemetryService implements ITelemetryService {
        constructor() {
        }

        logError(obj): void {
            console.error(obj);
        }

        logInfo(obj): void {
            console.info(obj);
        }

        logWarning(obj): void {
            console.warn(obj);
        }
    }

    angular.module('chsakellBlogApp')
        .service('telemetryService', TelemetryService);
}