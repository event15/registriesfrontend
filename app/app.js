(function() {
    "use strict";

    var app = angular
        .module("registriesFrontend",
               ["common.services",
                "ui.router"])

        .constant("baseUrl", "/madkom/registries/web");


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
                        },
                        "PositionList@main": {
                            templateUrl: "app/positions/views/positionListView.html",
                            controller:  "PositionListController as vm"
                        }
                    },
                    resolve: {
                        positionResource: "positionResource",

                        position: function (positionResource) {
                            var registryId = 1;

                            return positionResource.query({ registryId: registryId });
                        }
                    }
                })

                .state("main.registry", {
                    url: "rejestry"
                })

                .state("main.registry.add", {
                    url: "/dodaj",
                    views: {
                        "RegistryAdd@main": {
                            url: "/dodaj",
                            templateUrl: "app/registries/views/registryAddView.html"
                        }
                    }
                })

                .state("main.registry.positions", {
                    url: "/:registryId",
                    views: {
                       "PositionList@main": {
                           templateUrl: "app/positions/views/positionListView.html",
                           controller:  "PositionListController as vm"
                       }
                    },

                    resolve: {
                        positionResource: "positionResource",

                        position: function (positionResource, $stateParams) {
                            var registryId = $stateParams.registryId;

                            return positionResource
                                .query({ registryId: registryId },

                                    function (response) {
                                        // no code needed for success
                                        console.log("Listę pozycji pobrano pomyślnie.");
                                    },

                                    function(response) {
                                        if(response.status == 404) {
                                            console.log("Registry is probably empty: " +
                                                response.config.method + " " +response.config.url);
                                        } else {
                                            console.log(response.statusText);
                                        }
                                    }
                            );
                        }
                    }
                })

        }]
    );
}());