(function() {
    "use strict";

    var app = angular
        .module("registriesFrontend",
               ["common.services",
                /*"positionResourceMock",*/
                "ui.router"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider)
        {
            $urlRouterProvider.otherwise("/");

            $stateProvider

                .state("main", {
                    url: "/",
                    views: {
                        "sidebarView": {
                            templateUrl: "app/sidebarView.html"
                        },
                        "contentView": {
                            templateUrl: "app/contentView.html"
                        },
                        "RegistryList@main": {
                            templateUrl: "app/registries/views/registryListView.html",
                            controller:  "RegistryListController as vm"
                        }
                    }
                })

                .state("main.registry", {
                    url: "rejestry",
                    views: {
                        "RegistryAdd": {
                            templateUrl: "app/registries/views/registryAddView.html"
                            //controller:  "RegistryListController as vm"
                        }
                    }
                })
                .state("main.registry.positions", {
                    url: "/:registryId/pozycje/",
                    templateUrl: "app/positions/views/positionListView.html",
                    controller:  "PositionListController as vm",
                    resolve: {
                        positionResource: "positionResource",

                        position: function (positionResource, $stateParams) {
                            var registryId = $stateParams.registryId;
                            return positionResource.get({ registryId: registryId });
                        }
                    }
                })
        }]
    );
}());