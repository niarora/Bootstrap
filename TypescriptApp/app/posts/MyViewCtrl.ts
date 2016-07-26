module app.myView {
    class MyViewCtrl {
        private gridId = 'personGrid';
        private gridOptions: kendo.ui.GridOptions;

        static $inject = ['personService'];
        constructor(private personService: app.common.services.PersonService) {
            this.load();
        }

        remove(id: number): void {
            var self = this; // Attention here.. check 'this' in TypeScript and JavaScript
            this.personService.remove(id)
                .then(function (result) {
                    self.load();
                });
        }

        private load(): void {
            this.setupGrid();
        }

        private setupGrid() : void
        {
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: (options: kendo.data.DataSourceTransportOptions) => {
                        this.personService.get().then(
                            persons => {
                                options.success(persons);
                            },
                            failure =>
                            {
                                options.error(failure);
                            });
                    }
                }
            });

            this.gridOptions = {
                dataSource: dataSource,
                columns: [
                    {
                        title: 'Name',
                        template: (data: app.domain.IPerson) => data.FirstName + ' ' + data.LastName
                    },
                    {
                        field: 'City'
                    }
                ]
            };
        }

        private personGrid(): kendo.ui.Grid {
            return $('#' + this.gridId).getKendoGrid();
        }
    }
    angular.module('chsakellBlogApp')
        .controller('MyViewCtrl', MyViewCtrl);
}