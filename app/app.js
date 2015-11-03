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
                url: "",
                views: {
                    "sidebarView": {
                        templateUrl: "app/sidebarView.html",
                        controller:  "RegistryListController as vm"
                    },
                    "contentView": {
                        templateUrl: "app/contentView.html",
                        controller:  "PositionListController as vm"

                    }
                }
            })

            .state("main.position", {
                url:         "/pozycje",
                templateUrl: "app/positions/views/positionListView.html",
            }).state("main.position.add", {
                url:         "/dodaj",
                templateUrl: "app/positions/views/positionAddView.html",
                controller:  "PositionAddController as vm"
            }).state("main.position.edit", {
                url:         "/edytuj",
                templateUrl: "app/positions/views/positionEditView.html",
                controller:  "PositionEditController as vm"
            })

            .state("main.registry", {
                url:         "/rejestry",
                templateUrl: "app/registries/views/registryListView.html",

            }).state("main.registry.add", {
                url:         "/dodaj",
                templateUrl: "app/registries/views/registryAddView.html",
                controller:  "RegistryAddController as vm"
            }).state("main.registry.edit", {
                url:         "/edytuj",
                templateUrl: "app/registries/views/registryEditView.html",
                controller:  "RegistryEditController as vm"
            })
        }]
    );
}());